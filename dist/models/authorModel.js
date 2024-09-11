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
exports.deleteAuthor = exports.updateAuthor = exports.addAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const authors_1 = __importDefault(require("../schema/authors"));
const getAllAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield authors_1.default.find().exec();
    }
    catch (err) {
        console.error(err);
        return [];
    }
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authors_1.default.findById(id)
            .populate("books")
            .populate("events");
        return author;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getAuthorById = getAuthorById;
const addAuthor = (author) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield authors_1.default.create(author);
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.addAuthor = addAuthor;
const updateAuthor = (id, author) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedAuthor = yield authors_1.default.findByIdAndUpdate(id, author, {
            new: true,
        });
        if (!updatedAuthor) {
            console.error(`Author with ID ${id} not found`);
        }
        return exports.updateAuthor;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedAuthor = yield authors_1.default.findByIdAndDelete(id);
        if (!exports.deleteAuthor) {
            console.error(`Author with ID ${id} not found`);
        }
        return deletedAuthor;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.deleteAuthor = deleteAuthor;
