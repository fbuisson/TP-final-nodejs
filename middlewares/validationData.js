import { APIResponse } from "../utils/response.js";

export const validateAuthor = (req, res, next) => {
  const { name, age, nationality } = req.body;

  let errors = [];

  if (typeof name !== "string" || name.trim() === "") {
    errors.push({ field: "name", message: "Name must be a non-empty string" });
  }

  if (typeof age !== "number" || age <= 0) {
    errors.push({ field: "age", message: "Age must be a positive number" });
  }

  if (typeof nationality !== "string" || nationality.trim() === "") {
    errors.push({
      field: "nationality",
      message: "Nationality must be a non-empty string",
    });
  }

  const validKeys = ["name", "age", "nationality"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      errors.push({ field: key, message: `Unexpected field: ${key}` });
    }
  });

  if (errors.length > 0) {
    return APIResponse(res, null, errors, 400);
  }

  next();
};

export const validateBook = (req, res, next) => {
  const { title, summary, genres_id, author_id } = req.body;

  let errors = [];

  if (typeof title !== "string" || title.trim() === "") {
    errors.push({
      field: "title",
      message: "Title must be a non-empty string",
    });
  }

  if (typeof summary !== "string" || summary.trim() === "") {
    errors.push({
      field: "summary",
      message: "Summary must be a non-empty string",
    });
  }

  if (
    !Array.isArray(genres_id) ||
    !genres_id.every((genre) => typeof genre === "string")
  ) {
    errors.push({
      field: "genres_id",
      message: "genres_id must be an array of strings or empty",
    });
  }

  if (typeof author_id !== "string" || author_id.trim() === "") {
    errors.push({
      field: "author_id",
      message: "Author_id must be a non-empty string",
    });
  }

  const validKeys = ["title", "summary", "genres_id", "author_id"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      errors.push({ field: key, message: `Unexpected field: ${key}` });
    }
  });

  if (errors.length > 0) {
    return APIResponse(res, null, errors, 400);
  }

  next();
};
export const validateGenre = (req, res, next) => {
  const { label } = req.body;

  let errors = [];

  if (typeof label !== "string" || label.trim() === "") {
    errors.push({
      field: "label",
      message: "Label must be a non-empty string",
    });
  }

  const validKeys = ["label"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      errors.push({ field: key, message: `Unexpected field: ${key}` });
    }
  });

  if (errors.length > 0) {
    return APIResponse(res, null, errors, 400);
  }

  next();
};

export const validateEvent = (req, res, next) => {
  const { name, address, date, author_id } = req.body;

  let errors = [];

  if (typeof name !== "string" || name.trim() === "") {
    errors.push({ field: "name", message: "Name must be a non-empty string" });
  }

  if (typeof address !== "string" || address.trim() === "") {
    errors.push({
      field: "address",
      message: "Address must be a non-empty string",
    });
  }

  if (!Date.parse(date)) {
    errors.push({
      field: "date",
      message: "Date must be a valid ISO 8601 date string",
    });
  }

  if (typeof author_id !== "string" || author_id.trim() === "") {
    errors.push({
      field: "author_id",
      message: "Author ID must be a non-empty string",
    });
  }

  const validKeys = ["name", "address", "date", "author_id"];
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!validKeys.includes(key)) {
      errors.push({ field: key, message: `Unexpected field: ${key}` });
    }
  });

  if (errors.length > 0) {
    return APIResponse(res, null, errors, 400);
  }

  next();
};
