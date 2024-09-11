"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const index_js_1 = require("../models/index.js");
const response_js_1 = require("../utils/response.js");
const crypto_1 = __importDefault(require("crypto"));
// Affiche tous les livres
const getBooks = (request, response) => {
    const books = index_js_1.bookModel.getAllBooks();
    (0, response_js_1.APIResponse)(response, books, "All books", 200);
};
exports.getBooks = getBooks;
// Affiche un livre en fonction de son ID
const getBook = (request, response) => {
    const { id } = request.params;
    const book = index_js_1.bookModel.getBookById(id);
    if (book) {
        (0, response_js_1.APIResponse)(response, book, "Book found", 200);
    }
    else {
        (0, response_js_1.APIResponse)(response, null, "Book not found", 404);
    }
};
exports.getBook = getBook;
// Crée un livre
const createBook = (request, response) => {
    const newBook = request.body;
    let valid = true;
    newBook.id = crypto_1.default.randomUUID();
    request.body.genres_id.forEach((id) => {
        const genre = index_js_1.genreModel.getGenreById(id);
        if (!genre)
            valid = false;
    });
    if (valid) {
        index_js_1.bookModel.addBook(newBook);
        (0, response_js_1.APIResponse)(response, newBook, "New book created", 200);
    }
    else
        (0, response_js_1.APIResponse)(response, null, "Genre not valid", 404);
};
exports.createBook = createBook;
// Modifie un livre par son ID
const updateBook = (request, response) => {
    const { id } = request.params;
    const newBook = request.body;
    const book = index_js_1.bookModel.getBookById(id);
    let valid = true;
    request.body.genres_id.forEach((id) => {
        const genre = index_js_1.genreModel.getGenreById(id);
        if (!genre)
            valid = false;
    });
    if (book && valid) {
        index_js_1.bookModel.updateBook(id, newBook);
        (0, response_js_1.APIResponse)(response, newBook, "Book was successfully modified", 200);
    }
    else {
        (0, response_js_1.APIResponse)(response, null, "Book not found", 404);
    }
};
exports.updateBook = updateBook;
// Efface un livre par son ID
const deleteBook = (request, response) => {
    const { id } = request.params;
    const book = index_js_1.bookModel.getBookById(id);
    if (book) {
        index_js_1.bookModel.deleteBook(id);
        (0, response_js_1.APIResponse)(response, null, "Book was successfully deleted", 200);
    }
    else {
        (0, response_js_1.APIResponse)(response, null, "Book not found", 404);
    }
};
exports.deleteBook = deleteBook;
