import { NextFunction, Request, Response } from "express";
import { env } from "../config/env";
import jwt from "jsonwebtoken";
import { APIResponse } from "../utils";

const { ACCESS_TOKEN_SECRET } = env;

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return APIResponse(res, null, "No token provided.", 401);
  }
  try {
    const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    res.locals.user = decoded;
    next();
  } catch (error) {
    console.error("Failed to authenticate token:", error);
    return APIResponse(res, null, "Failed to authenticate token.", 401);
  }
};
