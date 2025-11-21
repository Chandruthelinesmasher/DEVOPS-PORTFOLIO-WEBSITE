# =============================================
# Stage 1: Build Stage
# =============================================
FROM node:22-alpine AS builder

# Install build dependencies and set up non-root user
RUN apk update && \
    apk add --no-cache python3 make g++ && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Copy package files first (for better caching)
COPY --chown=nextjs:nodejs package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source code
COPY --chown=nextjs:nodejs . .

# Build the Vite application
RUN npm run build

# =============================================
# Stage 2: Production Stage (Nginx)
# =============================================
FROM nginx:alpine AS production

# Create non-root user and install essential tools
RUN apk update && \
    apk add --no-cache curl ca-certificates && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    rm -f /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built frontend files from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist /usr/share/nginx/html

# Change ownership to non-root user
RUN chown -R nextjs:nodejs /usr/share/nginx/html

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 8080

# Labels (good for container registries)
LABEL maintainer="kumaravelchadnru982@gmail.com"
LABEL description="Portfolio Website - Chandru K - DevOps Engineer"
LABEL org.opencontainers.image.source="https://github.com/Chandruthelinesmasher/portfolio-website"

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]