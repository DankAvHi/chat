import { logger } from "./logger";
import clc from "cli-color";

export const succesLogger = (message: string) =>
  logger(`${clc.green(`[✅ Succes]`)} ${clc.greenBright(message)}`);
