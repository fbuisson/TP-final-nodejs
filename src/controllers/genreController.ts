import { Request, Response } from "express";

import { genreModel } from "../models/genreModel";
import { APIResponse } from "../utils/response.js";
import crypto from "crypto";

export const getGenres = (request: Request, response: Response) => {
  const genres = genreModel.getAllGenres();
  APIResponse(response, genres, "List of all genres");
};

export const getGenre = (request: Request, response: Response) => {
  const { id } = request.params;
  const genre = genreModel.getGenreById(id);
  if (genre) {
    APIResponse(response, genre, "Genre found");
  } else {
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const createGenre = (request: Request, response: Response) => {
  const newGenre = request.body;
  newGenre.id = crypto.randomUUID();
  genreModel.addGenre(newGenre);
  APIResponse(response, newGenre, "Genre created", 201);
};

export const deleteGenre = (request: Request, response: Response) => {
  const id = request.params.id;
  const genre = genreModel.getGenreById(id);
  if (genre) {
    genreModel.deleteGenre(id);
    APIResponse(response, null, "Genre deleted", 204);
  } else APIResponse(response, null, "Genre not found", 404);
};

export const updateGenre = (request: Request, response: Response) => {
  const id = request.params.id;
  const newGenre = request.body;
  const genre = genreModel.getGenreById(id);
  if (genre) {
    genreModel.updateGenre(id, newGenre);
    APIResponse(response, post, "Genre updated", 200);
  } else APIResponse(response, null, "Genre not found", 404);
};
