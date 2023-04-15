import { filterObject } from "../helpers/filterObject";
import { errorLogger } from "../logger";
import { Config, EnvConfig } from "./config.d";

const requiredFields = ["DATABASE_URL"];
const notRequiredFields = ["PORT", "HOST"];

const envFields = Object.keys(process.env).filter(
    (field) => requiredFields.includes(field) || notRequiredFields.includes(field),
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
    const { isAllRequiredFieldsExisted, notExistedRequiredFields } = checkAllRequiredFieldsExisted();

    if (!isAllRequiredFieldsExisted) {
        const errorString = `Mising required fields in .env file:[${notExistedRequiredFields.map((field, index) =>
            index === 0 ? `${field}` : ` ${field}`,
        )}]`;
        errorLogger(errorString);
        throw new Error(errorString);
    }

    const envConfig: EnvConfig = filterObject(process.env, ([key, value]) => envFields.includes(key)) as EnvConfig;
    const config: Config = {
        ...envConfig,
        isDevelopment: process.env.NODE_ENV == "development",
        PORT: envConfig.PORT || 8000,
        HOST: envConfig.HOST || "localhost",
    };
    return config;
};

export const config = generateConfig();
