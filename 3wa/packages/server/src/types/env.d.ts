export interface IEnv {
  PORT: number;
  NODE_ENV: "development" | "production" | "test";

  ACCESS_TOKEN_SECRET: string;
  REFRESH_TOKEN_SECRET: string;

  ACCESS_TOKEN_EXPIRATION: string;
  REFRESH_TOKEN_EXPIRATION: string;

  ORIGIN: string;
  DATABASE_URL: string;
}
