import { Request, Response } from "express";
import { APIResponse } from "../utils";

export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) {
    return APIResponse(res, null, "Aucune image n'a été importée", 400);
  }
  APIResponse(res, req.file, "Une image a bien été importée", 201);
};

export const uploadMultipleImages = (req: Request, res: Response) => {
  if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
    return APIResponse(res, null, "Aucune image n'a été importée", 400);
  }
  APIResponse(res, req.files, "Des images ont bien été importées", 201);
};
