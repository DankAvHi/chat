import { CookieOptions } from "express";
import { config } from "../../config";

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: !config.isDevelopment,
  sameSite: "lax",
};

export const accessTokenCookieOptions: CookieOptions = {
  ...cookieOptions,
  expires: new Date(Date.now() + config.JWT_ACCES_EXPIRED * 60 * 1000),
};

export const refreshTokenCookieOptions: CookieOptions = {
  ...cookieOptions,
  expires: new Date(Date.now() + config.JWT_REFRESH_EXPIRED * 60 * 1000),
};
