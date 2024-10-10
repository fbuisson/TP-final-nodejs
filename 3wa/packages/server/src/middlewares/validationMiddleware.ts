import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { APIResponse } from "../utils/response";

const authorSchema = z.object({
  name: z.string().min(1, "Name must be a non-empty string"),
  age: z.number().positive("Age must be a positive number"),
  nationality: z.string().min(1, "Nationality must be a non-empty string"),
});

export const validateAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validation = authorSchema.safeParse(req.body);

  if (!validation.success) {
    const errors = validation.error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    const errorMessages = errors
      .map((e) => `${e.field}: ${e.message}`)
      .join(", ");

    return APIResponse(res, null, errorMessages, 400);
  }

  next();
};

const bookSchema = z.object({
  title: z.string().min(1, "Title must be a non-empty string"),
  summary: z.string().min(1, "Summary must be a non-empty string"),
  genres_id: z
    .array(z.string())
    .nonempty("genres_id must be an array of strings or empty"),
  authorId: z.string().min(1, "authorId must be a non-empty string"),
});

export const validateBook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validation = bookSchema.safeParse(req.body);

  if (!validation.success) {
    const errors = validation.error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    const errorMessages = errors
      .map((e) => `${e.field}: ${e.message}`)
      .join(", ");

    return APIResponse(res, null, errorMessages, 400);
  }

  next();
};

const genreSchema = z.object({
  name: z.string().min(1, "Name must be a non-empty string"),
});

export const validateGenre = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validation = genreSchema.safeParse(req.body);

  if (!validation.success) {
    const errors = validation.error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    const errorMessages = errors
      .map((e) => `${e.field}: ${e.message}`)
      .join(", ");

    return APIResponse(res, null, errorMessages, 400);
  }

  next();
};

const eventSchema = z.object({
  name: z.string().min(1, "Name must be a non-empty string"),
  address: z.string().min(1, "Address must be a non-empty string"),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Date must be a valid ISO 8601 date string",
  }),
  authorId: z.string().min(1, "authorId ID must be a non-empty string"),
});

export const validateEvent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validation = eventSchema.safeParse(req.body);

  if (!validation.success) {
    const errors = validation.error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    const errorMessages = errors
      .map((e) => `${e.field}: ${e.message}`)
      .join(", ");

    return APIResponse(res, null, errorMessages, 400);
  }

  next();
};
