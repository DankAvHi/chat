import { createClient } from "redis";
import { config } from "../config";
import { errorLogger } from "../logger";
import { succesLogger } from "../logger";

const redisClient = createClient({
  url: `redis://${config.REDIS_HOST}:${config.REDIS_PORT}`,
  password: config.REDIS_PASSWORD,
});

export const connectRedis = async () => {
  await redisClient.connect().catch((err) => {
    errorLogger(err);
    throw err;
  });
  succesLogger(`Connected to Redis cache db`);

  redisClient.on("error", (error) => errorLogger(error as string));
};

export { redisClient };
