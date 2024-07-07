FROM node:18-alpine AS builder

WORKDIR /src

COPY package.json ./

RUN pnpm install

COPY . .

RUN nginx:alpine

COPY --from=builder /dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


