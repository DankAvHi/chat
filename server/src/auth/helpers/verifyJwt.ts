import jwt from "jsonwebtoken";
import { config } from "../../config";
import { logger } from "../../logger";

export const verifyJwt = <T>(
  token: string,
  key: "JWT_ACCES_PUBLIC_KEY" | "JWT_REFRESH_PUBLIC_KEY",
): T | null => {
  try {
    const publicKey = Buffer.from(config[key], "base64").toString("ascii");
    return jwt.verify(token, publicKey) as T;
  } catch (error) {
    logger.error(error as string);
    return null;
  }
};
