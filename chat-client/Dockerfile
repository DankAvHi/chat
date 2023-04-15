FROM node:latest as build

RUN npm i -g pnpm

WORKDIR /usr/app

COPY package*.json ./
COPY pnpm-lock.yaml ./


RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:latest
COPY --from=build /usr/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]