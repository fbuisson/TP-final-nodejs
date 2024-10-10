import { Request, Response } from "express";
import { authorModel } from "../models";
import { APIResponse } from "../utils/response";
import logger from "../utils/logger";

export const getAuthors = async (request: Request, response: Response) => {
  try {
    logger.info("[GET] Récupérer la liste de tous les auteurs");
    const authors = await authorModel.getAllAuthors();
    APIResponse(response, authors, "List of all authors");
  } catch (err: any) {
    logger.error(
      `Erreur impossible de récupérer la liste des auteurs: ${err.message}`
    );
    APIResponse(response, null, "Error fetching authors", 500);
  }
};

export const getAuthor = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const author = await authorModel.getAuthorById(id);
    if (author) {
      APIResponse(response, author, "Author found");
    } else {
      APIResponse(response, null, "Author not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error fetching author", 500);
  }
};

export const createAuthor = async (request: Request, response: Response) => {
  try {
    const newAuthor = await authorModel.addAuthor(request.body);
    APIResponse(response, newAuthor, "Author created", 201);
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error creating author", 500);
  }
};

export const deleteAuthor = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const deletedAuthor = await authorModel.deleteAuthor(id);
    if (deletedAuthor) {
      APIResponse(response, null, "Author deleted", 204);
    } else APIResponse(response, null, "Author not found", 404);
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error deleting author", 500);
  }
};

export const updateAuthor = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const updatedAuthor = await authorModel.updateAuthor(id, request.body);
    if (updatedAuthor) {
      APIResponse(response, updatedAuthor, "Author updated", 200);
    } else {
      APIResponse(response, null, "Author not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error updating author", 500);
  }
};
