import { IEnv } from "../types/env";
import dotenv from "dotenv";

dotenv.config();

export const env: IEnv = {
  PORT: parseInt(process.env.PORT || "3000"),
  NODE_ENV: process.env.NODE_ENV as "development" | "production" | "test",

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "S3cret123!",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "S3cret321!",

  ACCESS_TOKEN_EXPIRATION: process.env.ACCESS_TOKEN_EXPIRATION || "15m",
  REFRESH_TOKEN_EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION || "7d",

  ORIGIN: process.env.ORIGIN || "http://localhost:5173",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://postgres:6612140899lM.@localhost:5432/3WA",
};
