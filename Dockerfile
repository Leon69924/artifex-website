FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm vite build

FROM nginx:1.27-alpine
# Allow non-root to write pid and cache
RUN sed -i 's|/run/nginx.pid|/tmp/nginx.pid|' /etc/nginx/nginx.conf && \
    chown -R 101:101 /var/cache/nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
