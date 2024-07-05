import {
  authorModel,
  bookModel,
  eventModel,
  genreModel,
} from "../models/index.js";

export const viewHomepage = (request, response) => {
  response.render("index", {
    title: "Titre de l'onglet",
    message: "Bibliothèque",
  });
};

export const viewAuthorsPage = (request, response) => {
  const authors = authorModel.getAllAuthors();
  response.render("authors", {
    title: "La liste des auteurs",
    authors: authors,
  });
};

export const viewDetailsAuthorPage = (request, response) => {
  const { id } = request.params;
  const author = authorModel.getAuthorById(id);
  response.render("detailsAuthor", {
    title: "Détails auteur",
    author: author,
  });
};

export const viewBooksPage = (request, response) => {
  const books = bookModel.getAllBooks();
  response.render("books", {
    title: "La liste des livres",
    books: books,
  });
};

export const viewEventsPage = (request, response) => {
  const events = eventModel.getAllEvents();
  response.render("events", {
    title: "La liste des dates de dédicaces auteurs",
    events: events,
  });
};

export const viewGenresPage = (request, response) => {
  const genres = genreModel.getAllGenres();
  response.render("genres", {
    title: "La liste des genres littéraires",
    genres: genres,
  });
};
