import { Request, Response } from "express";

import { authorModel } from "../models/index";

import { APIResponse } from "../utils/response";

import crypto from "crypto";

export const getAuthors = (request: Request, response: Response) => {
  const authors = authorModel.getAllAuthors();
  APIResponse(response, authors, "List of all authors");
};

export const getAuthor = (request: Request, response: Response) => {
  const { id } = request.params;
  const author = authorModel.getAuthorById(id);
  if (author) {
    APIResponse(response, author, "Author found");
  } else {
    APIResponse(response, null, "Author not found", 404);
  }
};

export const createAuthor = (request: Request, response: Response) => {
  const newAuthor = request.body;
  newAuthor.id = crypto.randomUUID();
  authorModel.addAuthor(newAuthor);
  APIResponse(response, newAuthor, "Author created", 201);
};

export const deleteAuthor = (request: Request, response: Response) => {
  const id = request.params.id;
  const author = authorModel.getAuthorById(id);
  if (author) {
    authorModel.deleteAuthor(id);
    APIResponse(response, null, "Author deleted", 204);
  } else APIResponse(response, null, "Author not found", 404);
};

export const updateAuthor = (request: Request, response: Response) => {
  const id = request.params.id;
  const newAuthor = request.body;
  const author = authorModel.getAuthorById(id);
  if (author) {
    authorModel.updateAuthor(id, newAuthor);
    APIResponse(response, post, "Author updated", 200);
  } else APIResponse(response, null, "Author not found", 404);
};
