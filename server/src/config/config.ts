import { filterObject } from "../helpers/filterObject";
import { Config, EnvConfig } from "./config.d";
import path from "path";
import dotenv from "dotenv";

if (!process.env.NODE_ENV) {
  dotenv.config({
    path: path.resolve(process.cwd(), ".env"),
  });
}

const requiredFields = [
  "DATABASE_URL",
  "JWT_ACCES_PRIVATE_KEY",
  "JWT_ACCES_PUBLIC_KEY",
  "JWT_REFRESH_PRIVATE_KEY",
  "JWT_REFRESH_PUBLIC_KEY",
  "REDIS_HOST",
  "REDIS_PORT",
  "REDIS_PASSWORD",
];
const notRequiredFields = [
  "PORT",
  "HOST",
  "JWT_ACCES_EXPIRED",
  "JWT_REFRESH_EXPIRED",
  "REDIS_CACHE_EXPIRED",
  "WHITELISTED_DOMAINS",
];

const envFields = Object.keys(process.env).filter(
  (field) =>
    requiredFields.includes(field) || notRequiredFields.includes(field),
);

const checkAllRequiredFieldsExisted = () => {
  const notExistedRequiredFields: string[] = [];

  let isAllRequiredFieldsExisted = true;

  for (let i = 0; i < requiredFields.length; i++) {
    if (!envFields.includes(requiredFields[i])) {
      notExistedRequiredFields.push(requiredFields[i]);
      isAllRequiredFieldsExisted = false;
    }
  }

  return { isAllRequiredFieldsExisted, notExistedRequiredFields };
};

const generateConfig = () => {
  const { isAllRequiredFieldsExisted, notExistedRequiredFields } =
    checkAllRequiredFieldsExisted();

  if (!isAllRequiredFieldsExisted) {
    const errorString = `Mising required fields in .env file:[${notExistedRequiredFields.map(
      (field, index) => (index === 0 ? `${field}` : ` ${field}`),
    )}]`;
    console.error(errorString);
    throw new Error(errorString);
  }

  const envConfig: EnvConfig = filterObject(process.env, ([key, value]) =>
    envFields.includes(key),
  ) as EnvConfig;
  const config: Config = {
    ...envConfig,
    isDevelopment: process.env.NODE_ENV == "development",
    PORT: Number(envConfig.PORT) || 8000,
    HOST: envConfig.HOST || "localhost",
    JWT_ACCES_EXPIRED: Number(envConfig.JWT_ACCES_EXPIRED) || 15,
    JWT_REFRESH_EXPIRED: Number(envConfig.JWT_REFRESH_EXPIRED) || 60,
    REDIS_CACHE_EXPIRED: Number(envConfig.REDIS_CACHE_EXPIRED) || 60,
    clientPath: path.resolve(process.cwd(), "../client/dist"),
    clientIndexFile: path.resolve(process.cwd(), "../client/dist/index.html"),
  };
  return config;
};

export const config = generateConfig();
