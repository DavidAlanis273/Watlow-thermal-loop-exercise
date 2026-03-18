# Watlow Thermal Loop — Docker Container
# This Dockerfile packages the static site into
# an nginx container for production deployment.
# Build:  docker build -t watlow-thermal-loop .
# Open:   http://localhost:8080

# Watlow Thermal Loop — Production Container
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy site files
COPY src/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1
