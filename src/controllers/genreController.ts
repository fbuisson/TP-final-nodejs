import { Request, Response } from "express";
import { genreModel } from "../models";
import { APIResponse } from "../utils/response.js";
import crypto from "crypto";
import { Types } from "mongoose";

export const getGenres = (request: Request, response: Response) => {
  const genres = genreModel.getAllGenres();
  try {
    APIResponse(response, genres, "List of all genres");
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const getGenre = (request: Request, response: Response) => {
  const { id } = request.params;
  const genre = genreModel.getGenreById(new Types.ObjectId(id));
  try {
    if (genre) {
      APIResponse(response, genre, "Genre found");
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const createGenre = (request: Request, response: Response) => {
  const newGenre = request.body;
  newGenre.id = crypto.randomUUID();
  try {
    genreModel.addGenre(newGenre);
    APIResponse(response, newGenre, "Genre created", 201);
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error creating genre", 404);
  }
};

export const deleteGenre = async (request: Request, response: Response) => {
  const id = request.params.id;
  const genre = await genreModel.getGenreById(new Types.ObjectId(id));

  try {
    if (genre) {
      genreModel.deleteGenre(new Types.ObjectId(id));
      APIResponse(response, null, "Genre deleted", 204);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const updateGenre = async (request: Request, response: Response) => {
  const id = request.params.id;
  const newGenre = request.body;
  const genre = await genreModel.getGenreById(new Types.ObjectId(id));
  try {
    if (genre) {
      genreModel.updateGenre(new Types.ObjectId(id), newGenre);
      APIResponse(response, newGenre, "Genre updated", 200);
    }
  } catch (err) {
    APIResponse(response, null, "Genre not found", 404);
  }
};
