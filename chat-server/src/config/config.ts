import { Config } from "./config.d";

const generateConfig = (): (() => Config) => {
    let config: Config | null = null;
    return () => {
        if (config) return config;

        config = { PORT: process.env.PORT || "8000" };

        return config as Config;
    };
};

const getConfig = generateConfig();

export const config: Config = { PORT: getConfig().PORT };
