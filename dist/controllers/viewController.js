"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewGenresPage = exports.viewEventsPage = exports.viewBooksPage = exports.viewDetailsAuthorPage = exports.viewAuthorsPage = exports.viewHomepage = void 0;
const index_1 = require("../models/index");
const viewHomepage = (request, response) => {
    response.render("index", {
        title: "Titre de l'onglet",
        message: "Bibliothèque",
    });
};
exports.viewHomepage = viewHomepage;
const viewAuthorsPage = (request, response) => {
    const authors = index_1.authorModel.getAllAuthors();
    response.render("authors", {
        title: "La liste des auteurs",
        authors: authors,
    });
};
exports.viewAuthorsPage = viewAuthorsPage;
const viewDetailsAuthorPage = (request, response) => {
    const { id } = request.params;
    const author = index_1.authorModel.getAuthorById(id);
    response.render("detailsAuthor", {
        title: "Détails auteur",
        author: author,
    });
};
exports.viewDetailsAuthorPage = viewDetailsAuthorPage;
const viewBooksPage = (request, response) => {
    const books = index_1.bookModel.getAllBooks();
    response.render("books", {
        title: "La liste des livres",
        books: books,
    });
};
exports.viewBooksPage = viewBooksPage;
const viewEventsPage = (request, response) => {
    const events = index_1.eventModel.getAllEvents();
    response.render("events", {
        title: "La liste des dates de dédicaces auteurs",
        events: events,
    });
};
exports.viewEventsPage = viewEventsPage;
const viewGenresPage = (request, response) => {
    const genres = index_1.genreModel.getAllGenres();
    response.render("genres", {
        title: "La liste des genres littéraires",
        genres: genres,
    });
};
exports.viewGenresPage = viewGenresPage;
