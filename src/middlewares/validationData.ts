import { APIResponse } from "../utils/response";
import { NextFunction, Request, Response } from "express";

export const validateAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, age, nationality } = req.body;

  let errors = [];

  if (typeof name !== "string" || name.trim() === "") {
    return APIResponse(res, null, "Name must be a non-empty string", 400);
  }

  if (typeof age !== "number" || age <= 0) {
    return APIResponse(res, null, "Age must be a positive number", 400);
  }

  if (typeof nationality !== "string" || nationality.trim() === "") {
    return APIResponse(
      res,
      null,
      "Nationality must be a non-empty string",
      400
    );
  }

  const validKeys = ["name", "age", "nationality"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      return APIResponse(res, null, `Unexpected field: ${key}`, 400);
    }
  });

  next();
};

export const validateBook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, summary, genres_id, author_id } = req.body;

  let errors = [];

  if (typeof title !== "string" || title.trim() === "") {
    return APIResponse(res, null, "Title must be a non-empty string", 400);
  }

  if (typeof summary !== "string" || summary.trim() === "") {
    return APIResponse(res, null, "Summary must be a non-empty string", 400);
  }

  if (
    !Array.isArray(genres_id) ||
    !genres_id.every((genre) => typeof genre === "string")
  ) {
    return APIResponse(
      res,
      null,
      "genres_id must be an array of strings or empty",
      400
    );
  }

  if (typeof author_id !== "string" || author_id.trim() === "") {
    return APIResponse(res, null, "Author_id must be a non-empty string", 400);
  }

  const validKeys = ["title", "summary", "genres_id", "author_id"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      return APIResponse(res, null, `Unexpected field: ${key}`, 400);
    }
  });

  next();
};
export const validateGenre = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { label } = req.body;

  if (typeof label !== "string" || label.trim() === "") {
    return APIResponse(res, null, "Label must be a non-empty string", 400);
  }

  const validKeys = ["label"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      return APIResponse(res, null, `Unexpected field: ${key}`, 400);
    }
  });

  next();
};

export const validateEvent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, address, date, author_id } = req.body;

  let errors = [];

  if (typeof name !== "string" || name.trim() === "") {
    return APIResponse(res, null, "Name must be a non-empty string", 400);
  }

  if (typeof address !== "string" || address.trim() === "") {
    return APIResponse(res, null, "Address must be a non-empty string", 400);
  }

  if (!Date.parse(date)) {
    return APIResponse(
      res,
      null,
      "Date must be a valid ISO 8601 date string",
      400
    );
  }

  if (typeof author_id !== "string" || author_id.trim() === "") {
    return APIResponse(res, null, "Author ID must be a non-empty string", 400);
  }

  const validKeys = ["name", "address", "date", "author_id"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      return APIResponse(res, null, `Unexpected field: ${key}`, 400);
    }
  });

  next();
};
