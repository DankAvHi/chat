import Express from "express";
import path from "path";

const CLIENT_PATH = path.resolve("client");
const CLIENT_DIST_PATH = path.resolve(CLIENT_PATH, "dist");
const CLIENT_INDEX_PATH = path.resolve(CLIENT_DIST_PATH, "index.html");

const app = Express();

app.use(Express.static(CLIENT_DIST_PATH));

app.get("*", (_req, res) => res.sendFile(CLIENT_INDEX_PATH));

app.listen(80, () => {
    console.log("App started at http://localhost:80");
});
