#Chat
FROM node:latest as build

COPY ./client /app/client
COPY ./server /app/server
COPY ./shared /app/shared

RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

WORKDIR /app/server
RUN pnpm install
RUN npx prisma

WORKDIR /app/client
RUN pnpm i
RUN pnpm run build

WORKDIR /app/server
CMD [ "pnpm","start" ]
EXPOSE 80