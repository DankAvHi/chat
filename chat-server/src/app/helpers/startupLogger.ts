import { config } from "../../config/config";
import { logger } from "../../logger";
import clc from "cli-color";

export const startupLogger = (host: string, port: number) => () =>
    logger(
        `${clc.greenBright(`[🚀 StartUp]`)} App started succefuly in ${
            config.isDevelopment ? "development" : "production"
        } mode, on http://${host}:${port}`,
    );
