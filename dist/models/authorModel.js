"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.updateAuthor = exports.addAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//// [START]
// En raison de la version ES de Node
// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
const url_1 = require("url");
const bookModel_js_1 = require("./bookModel.js");
const eventModel_js_1 = require("./eventModel.js");
// contient le chemin absolu du fichier actuel à savoir authorModel.js
const __filename = (0, url_1.fileURLToPath)(import.meta.url); // authorModel.js
// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir authorModel.js)
const __dirname = path_1.default.dirname(__filename); // J02/express/models ..... J02/express/models/authorModel.js
// On récupére le chemin vers notre fichier author.json où est stockée toute la donnée
const authorFilePath = path_1.default.join(__dirname, "../data/authors.json");
/// [END]
const getAllAuthors = () => {
    const data = fs_1.default.readFileSync(authorFilePath, "utf-8");
    return JSON.parse(data);
};
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (id) => {
    const authors = (0, exports.getAllAuthors)();
    const author = authors.find((u) => u.id === id);
    if (author) {
        // On ajoute des propriété 'books' et 'events' à notre objet author qui corresponds
        // à tout les books qu'il aura écrit et tous les events auxquel il va participer
        author.books = (0, bookModel_js_1.getBooksByAuthorId)(id);
        author.events = (0, eventModel_js_1.getEventsByAuthorId)(id);
    }
    return author;
};
exports.getAuthorById = getAuthorById;
const addAuthor = (author) => {
    const authors = (0, exports.getAllAuthors)();
    authors.push(author);
    fs_1.default.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};
exports.addAuthor = addAuthor;
const updateAuthor = (id, author) => {
    const authors = (0, exports.getAllAuthors)();
    const index = authors.findIndex((a) => a.id === id);
    if (index !== -1)
        authors[index] = author;
    fs_1.default.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};
exports.updateAuthor = updateAuthor;
const deleteAuthor = (id) => {
    const authors = (0, exports.getAllAuthors)();
    const index = authors.findIndex((author) => author.id === id);
    if (index !== -1)
        authors.splice(index, 1);
    (0, bookModel_js_1.deleteBooksByAuthorId)(id);
    (0, eventModel_js_1.deleteEventsByAuthorId)(id);
    fs_1.default.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};
exports.deleteAuthor = deleteAuthor;
