"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGenreByGenreId = exports.deleteBooksByAuthorId = exports.deleteBook = exports.updateBook = exports.addBook = exports.getBooksByGenreId = exports.getBooksByAuthorId = exports.getBookById = exports.getAllBooks = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//// [START]
// En raison de la version ES de Node
// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
const url_1 = require("url");
// contient le chemin absolu du fichier actuel à savoir bookModel.js
const __filename = (0, url_1.fileURLToPath)(import.meta.url); // bookModel.js
// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir bookModel.js)
const __dirname = path_1.default.dirname(__filename); // J02/express/models ..... J02/express/models/bookModel.js
// On récupére le chemin vers notre fichier comments.json où est stockée toute la donnée
const bookFilePath = path_1.default.join(__dirname, "../data/books.json");
/// [END]
const getAllBooks = () => {
    const data = fs_1.default.readFileSync(bookFilePath, "utf-8");
    return JSON.parse(data);
};
exports.getAllBooks = getAllBooks;
const getBookById = (id) => {
    const books = (0, exports.getAllBooks)();
    return books.find((b) => b.id === id);
};
exports.getBookById = getBookById;
const getBooksByAuthorId = (id) => {
    const books = (0, exports.getAllBooks)();
    return books.filter((book) => book.author_id === id);
};
exports.getBooksByAuthorId = getBooksByAuthorId;
const getBooksByGenreId = (id) => {
    const books = (0, exports.getAllBooks)();
    return books.filter((book) => book.genres_id.includes(id));
};
exports.getBooksByGenreId = getBooksByGenreId;
const addBook = (book) => {
    const books = (0, exports.getAllBooks)();
    books.push(book);
    fs_1.default.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};
exports.addBook = addBook;
const updateBook = (id, book) => {
    const books = (0, exports.getAllBooks)();
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1)
        books[index] = book;
    fs_1.default.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};
exports.updateBook = updateBook;
const deleteBook = (id) => {
    const books = (0, exports.getAllBooks)();
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1)
        books.splice(index, 1);
    fs_1.default.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};
exports.deleteBook = deleteBook;
const deleteBooksByAuthorId = (authorId) => {
    const books = (0, exports.getAllBooks)();
    const filteredBooks = books.filter((book) => book.author_id !== authorId);
    fs_1.default.writeFileSync(bookFilePath, JSON.stringify(filteredBooks, null, 2));
};
exports.deleteBooksByAuthorId = deleteBooksByAuthorId;
const deleteGenreByGenreId = (id) => {
    const books = (0, exports.getAllBooks)();
    books.forEach((book) => {
        const index = book.genres_id.findIndex((genre_id) => genre_id === id);
        if (index !== -1) {
            book.genres_id.splice(index, 1);
        }
    });
    fs_1.default.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};
exports.deleteGenreByGenreId = deleteGenreByGenreId;
