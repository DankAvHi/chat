import { logger } from "./logger";
import clc from "cli-color";

export const errorLogger = (message: string) =>
  logger(`${clc.red(`[❗ Error]`)} ${clc.redBright(message)}`);
