import { logger } from "../../logger";
import clc from "cli-color";

export const startupLogger = (port: number) => () =>
    logger(`${clc.greenBright(`[🚀 StartUp]`)} App started succefuly on port:${port}`);
