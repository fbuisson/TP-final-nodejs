import jwt from 'jsonwebtoken';
import { env } from '../config/env';

// Générer un Access Token
export const generateAccessToken = (userId: string): string => {
  return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
};

// Générer un Refresh Token
export const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ userId }, env.REFRESH_TOKEN_SECRET, { expiresIn: env.REFRESH_TOKEN_EXPIRATION });
};

// Vérifier un Refresh Token
export const verifyRefreshToken = (token: string): string | null => {
  try {
    const decoded = jwt.verify(token, env.REFRESH_TOKEN_SECRET) as { userId: string };
    return decoded.userId;
  } catch (err) {
    console.error('Invalid Refresh Token', err);
    return null;
  }
};
