import Express from "express";
import path from "path";
import { Server } from "socket.io";
import { createServer } from "http";

const CLIENT_PATH = path.resolve("client");
const CLIENT_DIST_PATH = path.resolve(CLIENT_PATH, "dist");
const CLIENT_INDEX_PATH = path.resolve(CLIENT_DIST_PATH, "index.html");

const app = Express();

app.use(Express.static(CLIENT_DIST_PATH));

app.get("*", (_req, res) => res.sendFile(CLIENT_INDEX_PATH));

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
});

httpServer.listen(80, () => {
    console.log("listening on http://localhost:80");
});
