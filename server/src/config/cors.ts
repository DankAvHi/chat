import { CorsOptions } from "cors";
import { errorLogger } from "../logger";
import { config } from "./config";

export const corsConfig: CorsOptions = {
    origin: function (origin: string | undefined, callback) {
        const whitelist = config.WHITELISTED_DOMAINS ? config.WHITELISTED_DOMAINS.split(",") : [];

        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            const errorString = `\nAttempt to fetch from unknown origin: ${origin}\n`;
            errorLogger(errorString);
            callback(new Error(errorString), false);
        }
    },

    credentials: true,
};
