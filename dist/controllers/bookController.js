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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const models_1 = require("../models");
const response_1 = require("../utils/response");
const mongoose_1 = require("mongoose");
const getBooks = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield models_1.bookModel.getAllBooks();
        (0, response_1.APIResponse)(response, books, "List of all books", 200);
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error fetching books", 500);
    }
});
exports.getBooks = getBooks;
const getBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const book = yield models_1.bookModel.getBookById(new mongoose_1.Types.ObjectId(id));
        if (book) {
            (0, response_1.APIResponse)(response, book, "Book found", 200);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Book not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error fetching book", 500);
    }
});
exports.getBook = getBook;
const createBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = request.body;
        let valid = true;
        for (const genreId of newBook.genres_id) {
            const genre = yield models_1.genreModel.getGenreById(new mongoose_1.Types.ObjectId(genreId));
            if (!genre)
                valid = false;
        }
        if (valid) {
            const createdBook = yield models_1.bookModel.addBook(newBook);
            (0, response_1.APIResponse)(response, createdBook, "New book created", 201);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Genre not valid", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error creating book", 500);
    }
});
exports.createBook = createBook;
const updateBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const newBook = request.body;
    try {
        const book = yield models_1.bookModel.getBookById(new mongoose_1.Types.ObjectId(id));
        let valid = true;
        for (const genreId of newBook.genres_id) {
            const genre = yield models_1.genreModel.getGenreById(new mongoose_1.Types.ObjectId(genreId));
            if (!genre)
                valid = false;
        }
        if (book && valid) {
            const updatedBook = yield models_1.bookModel.updateBook(new mongoose_1.Types.ObjectId(id), newBook);
            (0, response_1.APIResponse)(response, updatedBook, "Book was successfully modified", 200);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Book not found or invalid genre", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error updating book", 500);
    }
});
exports.updateBook = updateBook;
const deleteBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const book = yield models_1.bookModel.getBookById(new mongoose_1.Types.ObjectId(id));
        if (book) {
            yield models_1.bookModel.deleteBook(new mongoose_1.Types.ObjectId(id));
            (0, response_1.APIResponse)(response, null, "Book was successfully deleted", 204);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Book not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error deleting book", 500);
    }
});
exports.deleteBook = deleteBook;
