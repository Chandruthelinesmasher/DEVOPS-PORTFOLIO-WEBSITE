# =============================================
# Stage 1: Build Stage
# =============================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies
RUN npm install

# Copy source code
COPY . .

# Build the Vite application
RUN npm run build

# =============================================
# Stage 2: Production Stage (Nginx)
# =============================================
FROM nginx:alpine AS production

# Install essential tools
RUN apk update && \
    apk add --no-cache curl ca-certificates

# Remove default Nginx config to avoid conflicts
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy compiled frontend files from Builder → Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 8080

# Labels (good for container registries)
LABEL maintainer="chandrukumaravel007@gmail.com"
LABEL description="Portfolio Website - Chandru K - DevOps Engineer"
LABEL org.opencontainers.image.source="https://github.com/Chandruthelinesmasher/portfolio-website"

# Healthcheck (works because Nginx serves /health)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
