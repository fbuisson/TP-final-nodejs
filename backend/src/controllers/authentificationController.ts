import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

import { APIResponse, hashPassword, verifyPassword } from "../utils";
import { userValidation } from "../validation/users";
import { z } from "zod";
import { addUser, findByCredentials } from "../models";

const { JWT_SECRET, NODE_ENV } = env;

export const register = async (request: Request, response: Response) => {
  try {
    const { email, password, name } = userValidation.parse(request.body);
    const emailAlreadyExists = await findByCredentials(email);
    if (emailAlreadyExists)
      return APIResponse(response, [], "Cet email est déjà utilisé", 400);

    const hash = await hashPassword(password);
    if (!hash) throw new Error("Erreur lors du hashage du mot de passe");

    const newUser = await addUser({ name, email, password: hash });
    if (!newUser)
      return APIResponse(
        response,
        [],
        "Erreur lors de la création de l'utilisateur",
        500
      );

    return APIResponse(response, newUser._id, "Vous êtes inscrit", 200);
  } catch (err) {
    if (err instanceof z.ZodError) {
      // ici on retourne les erreurs de validation
      return APIResponse(response, err.errors, "Formulaire incorrect", 400);
    }
    APIResponse(response, null, "Erreur serveur", 500);
  }
};

export const login = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const user = await findByCredentials(email);
    if (!user)
      return APIResponse(response, [], "Email ou mot de passe invalide", 400);

    // vérification du mot de passe
    if ((await verifyPassword(user.password, password)) === false) {
      return APIResponse(response, [], "Email ou mot de passe invalide", 400);
    }

    // email + mdp corrects: on crée un JWT, on stocke l'user ID dans le payload (body du token) pour le lire ultérieurement
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    response.cookie("token", token, {
      httpOnly: true, // true empêche l'accès au cookie en javascript: accessible uniquement via communication http
      sameSite: "strict", // protége contre les attaques CSRF
      secure: NODE_ENV === "production", // signifie que le cookie ne sera envoyé que sur du HTTPS
    });
    APIResponse(response, null, "Vous êtes connecté", 200);
  } catch (err) {
    APIResponse(response, null, "Erreur serveur", 500);
  }
};

export const logout = (request: Request, response: Response) => {
  response.clearCookie("token");
  APIResponse(response, null, "Vous êtes déconnecté", 200);
};
