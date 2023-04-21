import { config } from "../config";
import { redisClient } from "../db";
import { findUniqueUser } from "../user/user.service";
import { signJwt } from "./helpers";
import { user } from "@prisma/client";
import { createUser } from "../user/user.service";
import { hashPassword } from "./helpers/hashPassword";

export const isUserExisted = async (login: string) =>
  !!(await findUniqueUser({ login }));

export const registerUser = async (login: string, password: string) => {
  const hashedPassword = await hashPassword(password);
  const user = await createUser({ login, password: hashedPassword });
  return user;
};

export const loginUser = async (login: string, password: string) => {};

export const signTokens = async (id: string, user: user) => {
  await redisClient.set(`${id}`, JSON.stringify(user), {
    EX: config.REDIS_CACHE_EXPIRED * 60,
  });

  const accessToken = signJwt({ sub: user.id }, "JWT_ACCES_PRIVATE_KEY", {
    expiresIn: `${config.JWT_ACCES_EXPIRED}m`,
  });

  const refreshToken = signJwt({ sub: user.id }, "JWT_REFRESH_PRIVATE_KEY", {
    expiresIn: `${config.JWT_REFRESH_EXPIRED}m`,
  });

  return { accessToken, refreshToken };
};
