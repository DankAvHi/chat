import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../config";
import { errorLogger } from "../logger";

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

export const verifyJwt = <T,>(token: string, key: "JWT_ACCES_PUBLIC_KEY" | "JWT_REFRESH_PUBLIC_KEY"): T | null => {
    try {
        const publicKey = Buffer.from(config[key], "base64").toString("ascii");
        return jwt.verify(token, publicKey) as T;
    } catch (error) {
        errorLogger(error as string);
        return null;
    }
};
