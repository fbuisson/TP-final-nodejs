import { genreModel } from "../models";
import { APIResponse } from "../utils/response.js";

export const getGenres = (request, response) => {
  const genres = genreModel.getAllGenres();
  APIResponse(response, genres, "List of all genres");
};

export const getGenre = (request, response) => {
  const { id } = request.params;
  const genre = genreModel.getGenreById(id);
  if (genre) {
    APIResponse(response, genre, "Genre found");
  } else {
    APIResponse(response, null, "Genre not found", 404);
  }
};

export const createGenre = (request, response) => {
  const newGenre = request.body;
  newGenre.id = crypto.randomUUID();
  genreModel.addGenre(newGenre);
  APIResponse(response, newGenre, "Genre created", 201);
};

export const deleteGenre = (request, response) => {
  const id = request.params.id;
  const genre = genreModel.getGenreById(id);
  if (genre) {
    genreModel.deleteGenre(id);
    APIResponse(response, null, "Genre deleted", 204);
  } else APIResponse(response, null, "Genre not found", 404);
};

export const updateGenre = (request, response) => {
  const id = request.params.id;
  const newGenre = request.body;
  const genre = genreModel.getGenreById(id);
  if (genre) {
    genreModel.updateGenre(id, new Genre());
    APIResponse(response, post, "Genre updated", 200);
  } else APIResponse(response, null, "Genre not found", 404);
};
