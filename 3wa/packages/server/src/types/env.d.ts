export interface IEnv {
  PORT: number;
  NODE_ENV: "development" | "production" | "test";
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_EXPIRATION: string;
  ORIGIN: string;
  DATABASE_URL: string;
}
