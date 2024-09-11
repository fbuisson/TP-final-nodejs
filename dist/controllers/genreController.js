"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGenre = exports.deleteGenre = exports.createGenre = exports.getGenre = exports.getGenres = void 0;
const models_1 = require("../models");
const response_js_1 = require("../utils/response.js");
const crypto_1 = __importDefault(require("crypto"));
const mongoose_1 = require("mongoose");
const getGenres = (request, response) => {
    const genres = models_1.genreModel.getAllGenres();
    try {
        (0, response_js_1.APIResponse)(response, genres, "List of all genres");
    }
    catch (err) {
        console.error(err);
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
    }
};
exports.getGenres = getGenres;
const getGenre = (request, response) => {
    const { id } = request.params;
    const genre = models_1.genreModel.getGenreById(new mongoose_1.Types.ObjectId(id));
    try {
        if (genre) {
            (0, response_js_1.APIResponse)(response, genre, "Genre found");
        }
    }
    catch (err) {
        console.error(err);
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
    }
};
exports.getGenre = getGenre;
const createGenre = (request, response) => {
    const newGenre = request.body;
    newGenre.id = crypto_1.default.randomUUID();
    try {
        models_1.genreModel.addGenre(newGenre);
        (0, response_js_1.APIResponse)(response, newGenre, "Genre created", 201);
    }
    catch (err) {
        console.error(err);
        (0, response_js_1.APIResponse)(response, null, "Error creating genre", 404);
    }
};
exports.createGenre = createGenre;
const deleteGenre = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const genre = yield models_1.genreModel.getGenreById(new mongoose_1.Types.ObjectId(id));
    try {
        if (genre) {
            models_1.genreModel.deleteGenre(new mongoose_1.Types.ObjectId(id));
            (0, response_js_1.APIResponse)(response, null, "Genre deleted", 204);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
    }
});
exports.deleteGenre = deleteGenre;
const updateGenre = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const newGenre = request.body;
    const genre = yield models_1.genreModel.getGenreById(new mongoose_1.Types.ObjectId(id));
    try {
        if (genre) {
            models_1.genreModel.updateGenre(new mongoose_1.Types.ObjectId(id), newGenre);
            (0, response_js_1.APIResponse)(response, newGenre, "Genre updated", 200);
        }
    }
    catch (err) {
        (0, response_js_1.APIResponse)(response, null, "Genre not found", 404);
    }
});
exports.updateGenre = updateGenre;
