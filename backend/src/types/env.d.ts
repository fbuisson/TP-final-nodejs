export interface IEnv {
  PORT: number;
  NODE_ENV: "development" | "production" | "test";
  JWT_SECRET: string;
  ORIGIN: string;
  MONGO_URI: string;
  REFRESH_TOKEN_SECRET: string;  // Clé secrète pour les Refresh Tokens
  JWT_EXPIRATION: string;        // Durée de vie des Access Tokens (ex: '15m' pour 15 minutes)
  REFRESH_TOKEN_EXPIRATION: string; // Durée de vie des Refresh Tokens (ex: '7d' pour 7 jours)
}
