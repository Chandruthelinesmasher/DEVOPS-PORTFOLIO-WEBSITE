# =============================================
# Stage 1: Build Stage
# =============================================
FROM node:22-alpine AS builder

# Install system dependencies required for native npm packages (if any)
RUN apk update && \
    apk add --no-cache python3 make g++ && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Copy package files with proper ownership (improves layer caching)
COPY --chown=nextjs:nodejs package*.json ./

# ✅ FIX: Install ALL dependencies (including devDependencies like Vite)
RUN npm ci && \
    npm cache clean --force

# Copy source code
COPY --chown=nextjs:nodejs . .

# Build the Vite application
USER nextjs
RUN npm run build

# =============================================
# Stage 2: Production Stage (Nginx)
# =============================================
FROM nginx:alpine AS production

# Install minimal runtime dependencies and set up non-root user
RUN apk update && \
    apk add --no-cache curl ca-certificates && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    rm -f /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static assets from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist /usr/share/nginx/html

# Ensure ownership is correct
RUN chown -R nextjs:nodejs /usr/share/nginx/html

# Switch to non-root user
USER nextjs

# Expose port 8080 (must match nginx.conf)
EXPOSE 8080

# Metadata labels
LABEL maintainer="kumaravelchadnru982@gmail.com"
LABEL description="Portfolio Website - Chandru K - DevOps Engineer"
LABEL org.opencontainers.image.source="https://github.com/Chandruthelinesmasher/DEVOPS-PORTFOLIO-WEBSITE"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]