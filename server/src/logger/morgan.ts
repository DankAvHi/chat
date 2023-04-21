import morgan from "morgan";
import { logger } from "./winston";
import { config } from "../config";

const stream = {
  write: (message: string) => logger.http(message),
};

const skip = () => !config.isDevelopment;

export const morganMiddleware = morgan(
  config.isDevelopment ? "dev" : "common",
  {
    skip,
    stream,
  },
);
