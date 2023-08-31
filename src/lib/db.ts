import { Redis } from "@upstash/redis"
if (!process.env.UPSTASH_REDIS_REST_URL)
  throw Error("UPSTASH_REDIS_REST_URL IS MISSING!")
if (!process.env.UPSTASH_REDIS_REST_TOKEN)
  throw Error("UPSTASH_REDIS_REST_TOKEN IS MISSING!")

export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
