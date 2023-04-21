export type EnvConfig = {
  PORT: number;
  NODE_ENV: string | undefined;
  HOST: string;
  DATABASE_URL: string;
  JWT_ACCES_PRIVATE_KEY: string;
  JWT_ACCES_PUBLIC_KEY: string;
  JWT_REFRESH_PRIVATE_KEY: string;
  JWT_REFRESH_PUBLIC_KEY: string;
  JWT_ACCES_EXPIRED: number;
  JWT_REFRESH_EXPIRED: number;
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD: string;
  REDIS_CACHE_EXPIRED: number;
  WHITELISTED_DOMAINS: string;
  [key: string]: string | number | undefined | boolean;
};

export type Config = EnvConfig & {
  isDevelopment: boolean;
  clientPath: string;
  clientIndexFile: string;

  [key: string]: string | number | undefined | boolean;
};
