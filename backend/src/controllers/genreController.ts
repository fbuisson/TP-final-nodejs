import { Request, Response } from "express";
import { genreModel } from "../models";
import { APIResponse } from "../utils/response.js";
import { Types } from "mongoose";

export const getGenres = async (request: Request, response: Response) => {
  try {
    const genres = await genreModel.getAllGenres();
    console.log("GENRES :", genres);
    APIResponse(response, genres, "List of all genres", 200);
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const getGenre = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const genre = await genreModel.getGenreById(new Types.ObjectId(id));
    if (genre) {
      APIResponse(response, genre, "Genre found", 200);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const createGenre = async (request: Request, response: Response) => {
  try {
    const newGenre = request.body;
    await genreModel.addGenre(newGenre);
    APIResponse(response, newGenre, "Genre created", 201);
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error creating genre", 404);
  }
};

export const deleteGenre = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const genre = await genreModel.getGenreById(new Types.ObjectId(id));
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
  try {
    const id = request.params.id;
    const newGenre = request.body;
    const genre = await genreModel.getGenreById(new Types.ObjectId(id));
    if (genre) {
      genreModel.updateGenre(new Types.ObjectId(id), newGenre);
      APIResponse(response, newGenre, "Genre updated", 200);
    }
  } catch (err) {
    APIResponse(response, null, "Genre not found", 404);
  }
};
