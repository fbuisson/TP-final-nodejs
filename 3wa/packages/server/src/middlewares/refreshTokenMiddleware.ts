// src/middlewares/refreshTokenMiddleware.ts

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import {
  APIResponse,
  verifyRefreshToken,
  generateAccessToken,
  generateRefreshToken,
} from "../utils";
import { getUserById, updateUser } from "../models";

const { ACCESS_TOKEN_SECRET, NODE_ENV } = env;

export const refreshTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken, refreshToken } = req.cookies; // Récupération de l'access et refresh token

  if (!accessToken || !refreshToken) {
    // Si l'un des tokens est manquant
    // Supprimer les cookies existants
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return next(); // Passer au middleware suivant sans vérifier l'authentification
  }

  try {
    // Vérification de la validité du token d'accès
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    return next(); // Si le token d'accès est valide, passer au middleware suivant
  } catch (error) {
    // Si le token d'accès a expiré, on vérifie le Refresh Token
    const userId = verifyRefreshToken(refreshToken);

    if (!userId) {
      // Si le Refresh Token n'est pas valide
      // Supprimer les cookies existants
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      return APIResponse(res, null, "Invalid Refresh Token.", 403); // Répondre avec une erreur
    }

    // Vérifier le Refresh Token en base de données
    const user = await getUserById(userId);
    if (!user || user.refreshToken !== refreshToken) {
      // Si le Refresh Token ne correspond pas à celui stocké en base
      // Supprimer les cookies existants
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      return APIResponse(res, null, "Invalid Refresh Token.", 403); // Répondre avec une erreur
    }

    // Générer un nouveau token d'accès et un nouveau Refresh Token
    const newAccessToken = generateAccessToken(userId);
    const newRefreshToken = generateRefreshToken(userId);

    // Mise à jour du Refresh Token en base
    await updateUser(userId, { refreshToken: newRefreshToken });

    // Mise à jour des cookies
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "strict",
    });
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "strict",
    });

    next(); // Continuer avec la requête
  }
};
