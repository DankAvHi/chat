import { PrismaClient } from "@prisma/client";
import { succesLogger } from "../logger/succesLogger";
import { errorLogger } from "../logger";

export const prisma = new PrismaClient();

export const checkPrismaDatabaseConnection = async () => {
  await prisma
    .$connect()
    .then(() => succesLogger(`Connected to database`))
    .catch((error: string) => {
      const errorString = `Cannot connect to database: ${error}`;
      errorLogger(errorString);
      throw new Error(errorString);
    });
};
