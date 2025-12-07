import Redis from "ioredis";

// Use a singleton pattern to avoid creating multiple connections in development
const globalForRedis = global as unknown as { redis: Redis };

export const redis =
  globalForRedis.redis ||
  new Redis(process.env.REDIS_URL || "");

if (process.env.NODE_ENV !== "production") globalForRedis.redis = redis;

export default redis;
