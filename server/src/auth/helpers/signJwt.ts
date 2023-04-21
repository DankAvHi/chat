import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../../config";

export const signJwt = (
  // eslint-disable-next-line
  payload: {},
  key: "JWT_ACCES_PRIVATE_KEY" | "JWT_REFRESH_PRIVATE_KEY",
  options: SignOptions = {},
) => {
  const privateKey = Buffer.from(config[key], "base64").toString("ascii");
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};
