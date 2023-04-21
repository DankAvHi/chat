import { PrismaClient } from "@prisma/client";
import { logger } from "../logger";

export const prisma = new PrismaClient();

export const checkPrismaDatabaseConnection = async () => {
  await prisma
    .$connect()
    .then(() => logger.info(`Connected to database`))
    .catch((error: string) => {
      const errorString = `Cannot connect to database: ${error}`;
      logger.error(errorString);
      throw new Error(errorString);
    });
};
