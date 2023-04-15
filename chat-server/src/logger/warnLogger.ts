import { logger } from "./logger";
import clc from "cli-color";

export const warnLogger = (message: string) => logger(`${clc.yellowBright(`[⚠️  Warn]`)} ${message}`);
