import { createClient } from "redis";
import { config } from "../config";
import { logger } from "../logger";

const redisClient = createClient({
  url: `redis://${config.REDIS_HOST}:${config.REDIS_PORT}`,
  password: config.REDIS_PASSWORD,
});

export const connectRedis = async () => {
  await redisClient.connect().catch((err) => {
    logger.error(err);
    throw err;
  });
  logger.info(`Connected to Redis cache db`);

  redisClient.on("error", (error) => logger.error(error as string));
};

export { redisClient };
