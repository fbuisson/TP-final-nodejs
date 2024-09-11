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
exports.deleteGenre = exports.updateGenre = exports.addGenre = exports.getGenreById = exports.getAllGenres = void 0;
const genres_1 = __importDefault(require("../schema/genres"));
const getAllGenres = () => {
    try {
        return genres_1.default.find().exec();
    }
    catch (err) {
        console.error(err);
        return [];
    }
};
exports.getAllGenres = getAllGenres;
const getGenreById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const genre = yield genres_1.default.findById(id).exec();
        return genre;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getGenreById = getGenreById;
const addGenre = (genre) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return genres_1.default.create(genre);
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.addGenre = addGenre;
const updateGenre = (id, genre) => {
    try {
        return genres_1.default.updateOne({ _id: id }, genre).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.updateGenre = updateGenre;
const deleteGenre = (id) => {
    try {
        return genres_1.default.deleteOne(id).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.deleteGenre = deleteGenre;
