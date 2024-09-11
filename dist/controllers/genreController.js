"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGenre = exports.deleteGenre = exports.createGenre = exports.getGenre = exports.getGenres = void 0;
const genreModel_1 = require("../models/genreModel");
const response_js_1 = require("../utils/response.js");
const crypto_1 = __importDefault(require("crypto"));
const getGenres = (request, response) => {
    const genres = genreModel_1.genreModel.getAllGenres();
    (0, response_js_1.APIResponse)(response, genres, "List of all genres");
};
exports.getGenres = getGenres;
const getGenre = (request, response) => {
    const { id } = request.params;
    const genre = genreModel_1.genreModel.getGenreById(id);
    if (genre) {
        (0, response_js_1.APIResponse)(response, genre, "Genre found");
    }
    else {
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
    }
};
exports.getGenre = getGenre;
const createGenre = (request, response) => {
    const newGenre = request.body;
    newGenre.id = crypto_1.default.randomUUID();
    genreModel_1.genreModel.addGenre(newGenre);
    (0, response_js_1.APIResponse)(response, newGenre, "Genre created", 201);
};
exports.createGenre = createGenre;
const deleteGenre = (request, response) => {
    const id = request.params.id;
    const genre = genreModel_1.genreModel.getGenreById(id);
    if (genre) {
        genreModel_1.genreModel.deleteGenre(id);
        (0, response_js_1.APIResponse)(response, null, "Genre deleted", 204);
    }
    else
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
};
exports.deleteGenre = deleteGenre;
const updateGenre = (request, response) => {
    const id = request.params.id;
    const newGenre = request.body;
    const genre = genreModel_1.genreModel.getGenreById(id);
    if (genre) {
        genreModel_1.genreModel.updateGenre(id, newGenre);
        (0, response_js_1.APIResponse)(response, post, "Genre updated", 200);
    }
    else
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
};
exports.updateGenre = updateGenre;
