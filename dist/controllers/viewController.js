"use strict";
// import { NextFunction, Request, Response } from "express";
// import {
//   authorModel,
//   bookModel,
//   eventModel,
//   genreModel,
// } from "../models/index";
// export const viewHomepage = (request: Request, response: Response) => {
//   response.render("index", {
//     title: "Titre de l'onglet",
//     message: "Bibliothèque",
//   });
// };
// export const viewAuthorsPage = (request: Request, response: Response) => {
//   const authors = authorModel.getAllAuthors();
//   response.render("authors", {
//     title: "La liste des auteurs",
//     authors: authors,
//   });
// };
// export const viewDetailsAuthorPage = (request: Request, response: Response) => {
//   const { id } = request.params;
//   const author = authorModel.getAuthorById(id);
//   response.render("detailsAuthor", {
//     title: "Détails auteur",
//     author: author,
//   });
// };
// export const viewBooksPage = (request: Request, response: Response) => {
//   const books = bookModel.getAllBooks();
//   response.render("books", {
//     title: "La liste des livres",
//     books: books,
//   });
// };
// export const viewEventsPage = (request: Request, response: Response) => {
//   const events = eventModel.getAllEvents();
//   response.render("events", {
//     title: "La liste des dates de dédicaces auteurs",
//     events: events,
//   });
// };
// export const viewGenresPage = (request: Request, response: Response) => {
//   const genres = genreModel.getAllGenres();
//   response.render("genres", {
//     title: "La liste des genres littéraires",
//     genres: genres,
//   });
// };
