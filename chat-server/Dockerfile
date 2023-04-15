FROM node:latest

RUN npm i -g pnpm

WORKDIR /usr/app

COPY package*.json ./
COPY pnpm-lock.yaml ./


RUN pnpm install

COPY . .

RUN npx prisma generate

EXPOSE ${PORT}
CMD [ "pnpm", "start" ]