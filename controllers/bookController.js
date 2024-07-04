import { bookModel } from "../models/index.js";
import { APIResponse } from "../utils/response.js";
import crypto from "crypto";

// Affiche tous les livres
export const getBooks = (request, response) => {
  const books = bookModel.getAllBooks();
  APIResponse(response, books, "All books", 200);
};

// Affiche un livre en fonction de son ID
export const getBook = (request, response) => {
  const { id } = request.params;
  const book = bookModel.getBookById(id);

  if (book) {
    APIResponse(response, book, "Book found", 200);
  } else {
    APIResponse(response, null, "Book not found", 404);
  }
};

// Crée un livre
export const createBook = () => {
  const newBook = request.body;
  newBook.id = crypto.randomUUID();
  bookModel.addBook(newBook);
  APIResponse(response, newBook, "New book created", 200);
};

// Modifie un livre par son ID
export const updateBook = () => {
  const { id } = request.params;
  const newBook = request.body;
  const book = bookModel.getBookById(id);

  if (book) {
    bookModel.updateBook(id, book);
    APIResponse(response, newBook, "Book was successfully modified", 200);
  } else {
    APIResponse(response, null, "Book not found", 404);
  }
};

// Efface un livre par son ID
export const deleteBook = () => {
  const { id } = request.params;
  const book = bookModel.getBookById(id);

  if (book) {
    bookModel.deleteBookById(id);
    APIResponse(response, null, "Book was successfully deleted", 200);
  } else {
    APIResponse(response, null, "Book not found", 404);
  }
};

// Affiche une liste de livres en fonction de l'auteur
export const getBookListAuthor = () => {
  const { id } = request.params;
  const books = bookModel.getBooksByAuthorId(id);

  if (books) {
    APIResponse(response, books, "Author's book list found", 200);
  } else {
    APIResponse(response, null, "Book list not found for this author", 404);
  }
};

// Affiche une liste de livres en fonction du genre
export const getBookListGenre = () => {
  const { id } = request.params;
  const books = bookModel.getBooksByGenreId(id);

  if (books) {
    APIResponse(response, books, "Genre's book list found", 200);
  } else {
    APIResponse(response, null, "Book list not found for this genre", 404);
  }
};
