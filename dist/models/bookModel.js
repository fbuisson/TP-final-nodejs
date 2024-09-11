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
exports.deleteGenreByGenreId = exports.deleteBooksByAuthorId = exports.deleteBook = exports.updateBook = exports.addBook = exports.getBooksByGenreId = exports.getBooksByAuthorId = exports.getBookById = exports.getAllBooks = void 0;
const books_1 = __importDefault(require("../schema/books"));
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield books_1.default.find().exec();
    }
    catch (err) {
        console.error(err);
        return [];
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield books_1.default.findById(id).exec();
        return book;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getBookById = getBookById;
const getBooksByAuthorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield books_1.default.find({ author_id: id })
            .populate({
            path: "author_id",
            select: "name",
        })
            .exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getBooksByAuthorId = getBooksByAuthorId;
const getBooksByGenreId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield books_1.default.find({ genres_id: id })
            .populate({
            path: "genres_id",
            select: "label",
        })
            .exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getBooksByGenreId = getBooksByGenreId;
const addBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield books_1.default.create(book);
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.addBook = addBook;
const updateBook = (id, book) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = yield books_1.default.findByIdAndUpdate(id, book, { new: true });
        if (!updatedBook) {
            console.error(`Book with ID ${id} not found`);
        }
        return updatedBook;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.updateBook = updateBook;
const deleteBook = (id) => {
    try {
        return books_1.default.deleteOne({ _id: id }).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.deleteBook = deleteBook;
const deleteBooksByAuthorId = (authorId) => {
    try {
        return books_1.default.deleteOne({ author_id: authorId }).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.deleteBooksByAuthorId = deleteBooksByAuthorId;
const deleteGenreByGenreId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_1.default.updateMany({ genres_id: id }, { $pull: { genres_id: id } }).exec();
        return result;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.deleteGenreByGenreId = deleteGenreByGenreId;
