import { IEnv } from "../types/env";
import dotenv from "dotenv";

dotenv.config();

export const env: IEnv = {
  PORT: parseInt(process.env.PORT || "3000"),
  NODE_ENV: process.env.NODE_ENV as "development" | "production" | "test",

  JWT_SECRET: process.env.JWT_SECRET || "S3cret123!",

  ORIGIN: process.env.ORIGIN || "http://localhost:5173",
  //MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/express",

  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "refresh_secret",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "15m",

  REFRESH_TOKEN_EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION || "7d",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://postgres:6612140899lM.@localhost:5432/3WA",
};
