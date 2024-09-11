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
exports.updateAuthor = exports.deleteAuthor = exports.createAuthor = exports.getAuthor = exports.getAuthors = void 0;
const models_1 = require("../models");
const response_1 = require("../utils/response");
const mongoose_1 = require("mongoose");
const getAuthors = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield models_1.authorModel.getAllAuthors();
        (0, response_1.APIResponse)(response, authors, "List of all authors");
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error fetching authors", 500);
    }
});
exports.getAuthors = getAuthors;
const getAuthor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const author = yield models_1.authorModel.getAuthorById(new mongoose_1.Types.ObjectId(id));
        if (author) {
            (0, response_1.APIResponse)(response, author, "Author found");
        }
        else {
            (0, response_1.APIResponse)(response, null, "Author not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error fetching author", 500);
    }
});
exports.getAuthor = getAuthor;
const createAuthor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAuthor = yield models_1.authorModel.addAuthor(request.body);
        (0, response_1.APIResponse)(response, newAuthor, "Author created", 201);
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error creating author", 500);
    }
});
exports.createAuthor = createAuthor;
const deleteAuthor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const deletedAuthor = yield models_1.authorModel.deleteAuthor(new mongoose_1.Types.ObjectId(id));
        if (deletedAuthor) {
            (0, response_1.APIResponse)(response, null, "Author deleted", 204);
        }
        else
            (0, response_1.APIResponse)(response, null, "Author not found", 404);
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error deleting author", 500);
    }
});
exports.deleteAuthor = deleteAuthor;
const updateAuthor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const updatedAuthor = yield models_1.authorModel.updateAuthor(new mongoose_1.Types.ObjectId(id), request.body);
        if (updatedAuthor) {
            (0, response_1.APIResponse)(response, updatedAuthor, "Author updated", 200);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Author not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error updating author", 500);
    }
});
exports.updateAuthor = updateAuthor;
