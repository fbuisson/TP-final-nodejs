"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAuthor = exports.deleteAuthor = exports.createAuthor = exports.getAuthor = exports.getAuthors = void 0;
const index_1 = require("../models/index");
const response_1 = require("../utils/response");
const crypto_1 = __importDefault(require("crypto"));
const getAuthors = (request, response) => {
    const authors = index_1.authorModel.getAllAuthors();
    (0, response_1.APIResponse)(response, authors, "List of all authors");
};
exports.getAuthors = getAuthors;
const getAuthor = (request, response) => {
    const { id } = request.params;
    const author = index_1.authorModel.getAuthorById(id);
    if (author) {
        (0, response_1.APIResponse)(response, author, "Author found");
    }
    else {
        (0, response_1.APIResponse)(response, null, "Author not found", 404);
    }
};
exports.getAuthor = getAuthor;
const createAuthor = (request, response) => {
    const newAuthor = request.body;
    newAuthor.id = crypto_1.default.randomUUID();
    index_1.authorModel.addAuthor(newAuthor);
    (0, response_1.APIResponse)(response, newAuthor, "Author created", 201);
};
exports.createAuthor = createAuthor;
const deleteAuthor = (request, response) => {
    const id = request.params.id;
    const author = index_1.authorModel.getAuthorById(id);
    if (author) {
        index_1.authorModel.deleteAuthor(id);
        (0, response_1.APIResponse)(response, null, "Author deleted", 204);
    }
    else
        (0, response_1.APIResponse)(response, null, "Author not found", 404);
};
exports.deleteAuthor = deleteAuthor;
const updateAuthor = (request, response) => {
    const id = request.params.id;
    const newAuthor = request.body;
    const author = index_1.authorModel.getAuthorById(id);
    if (author) {
        index_1.authorModel.updateAuthor(id, newAuthor);
        (0, response_1.APIResponse)(response, post, "Author updated", 200);
    }
    else
        (0, response_1.APIResponse)(response, null, "Author not found", 404);
};
exports.updateAuthor = updateAuthor;
