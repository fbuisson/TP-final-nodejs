"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGenre = exports.updateGenre = exports.addGenre = exports.getGenreById = exports.getAllGenres = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//// [START]
// En raison de la version ES de Node
// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
const url_1 = require("url");
const bookModel_js_1 = require("./bookModel.js");
// contient le chemin absolu du fichier actuel à savoir genreModel.js
const __filename = (0, url_1.fileURLToPath)(import.meta.url); // genreModel.js
// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir genreModel.js)
const __dirname = path_1.default.dirname(__filename); // J02/express/models ..... J02/express/models/genreModel.js
// On récupére le chemin vers notre fichier genre.json où est stockée toute la donnée
const genreFilePath = path_1.default.join(__dirname, "../data/genres.json");
/// [END]
const getAllGenres = () => {
    const data = fs_1.default.readFileSync(genreFilePath, "utf-8");
    return JSON.parse(data);
};
exports.getAllGenres = getAllGenres;
const getGenreById = (id) => {
    const genres = (0, exports.getAllGenres)();
    const genre = genres.find((g) => g.id === id);
    if (genre)
        genre.books = (0, bookModel_js_1.getBooksByGenreId)(id);
    return genre;
};
exports.getGenreById = getGenreById;
const addGenre = (genre) => {
    const genres = (0, exports.getAllGenres)();
    genres.push(genre);
    fs_1.default.writeFileSync(genreFilePath, JSON.stringify(genres, null, 2));
};
exports.addGenre = addGenre;
const updateGenre = (id, genre) => {
    const genres = (0, exports.getAllGenres)();
    const index = genres.findIndex((g) => g.id === id);
    if (index !== -1)
        genres[index] = genre;
    fs_1.default.writeFileSync(genreFilePath, JSON.stringify(genres, null, 2));
};
exports.updateGenre = updateGenre;
const deleteGenre = (id) => {
    let genres = (0, exports.getAllGenres)();
    const index = genres.findIndex((g) => g.id === id);
    if (index !== -1)
        genres.splice(index, 1);
    (0, bookModel_js_1.deleteGenreByGenreId)(id);
    fs_1.default.writeFileSync(genreFilePath, JSON.stringify(genres, null, 2));
};
exports.deleteGenre = deleteGenre;
