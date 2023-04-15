import express from "express";
import { startupLogger } from "./helpers";
import { config, corsConfig } from "../config";
import { checkDatabaseConnection } from "../prisma";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter, createContext } from "../tRPC";
import cors from "cors";

const app = express();

app.use(cors(corsConfig));

app.use("/api", trpcExpress.createExpressMiddleware({ router: appRouter, createContext }));

export const startApp = () =>
    checkDatabaseConnection().then(() => app.listen(config.PORT, startupLogger(config.HOST, config.PORT)));
