export type EnvConfig = {
    PORT: number;
    NODE_ENV: string | undefined;
    HOST: string;
    [key: string]: string | number | undefined | boolean;
};

export type Config = EnvConfig & { isDevelopment: boolean; [key: string]: string | number | undefined | boolean };
