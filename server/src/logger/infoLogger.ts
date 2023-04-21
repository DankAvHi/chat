import { logger } from "./logger";
import clc from "cli-color";

export const infoLogger = (message: string) =>
  logger(`${clc.blue(`[📄 Info]`)} ${message}`);
