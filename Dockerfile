# =============================================
# Stage 1: Build Stage
# =============================================
FROM node:22-alpine AS builder

# Install system dependencies required for native npm builds
RUN apk update && \
    apk add --no-cache python3 make g++ && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Copy only package files to maximize caching
COPY --chown=nextjs:nodejs package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci --include=dev && \
    npm cache clean --force

# Copy application source
COPY --chown=nextjs:nodejs . .

# Build Vite application
USER nextjs
RUN npm run build

# =============================================
# Stage 2: Production Stage (Nginx)
# =============================================
FROM nginx:1.27-alpine AS production

# Install minimal runtime tools, drop default site
RUN apk update && \
    apk add --no-cache curl ca-certificates && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    rm -f /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist /usr/share/nginx/html

# Ensure correct permissions
RUN chown -R nextjs:nodejs /usr/share/nginx/html

# Run as non-root for security
USER nextjs

# Expose app port (must match nginx.conf)
EXPOSE 8080

# Metadata
LABEL maintainer="kumaravelchadnru982@gmail.com"
LABEL description="Portfolio Website - Chandru K - DevOps Engineer"
LABEL org.opencontainers.image.source="https://github.com/Chandruthelinesmasher/DEVOPS-PORTFOLIO-WEBSITE"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
