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
export const createBook = (request, response) => {
  const newBook = request.body;
  newBook.id = crypto.randomUUID();
  bookModel.addBook(newBook);
  APIResponse(response, newBook, "New book created", 200);
};

// Modifie un livre par son ID
export const updateBook = (request, response) => {
  const { id } = request.params;
  const newBook = request.body;
  const book = bookModel.getBookById(id);

  if (book) {
    bookModel.updateBook(id, newBook);
    APIResponse(response, newBook, "Book was successfully modified", 200);
  } else {
    APIResponse(response, null, "Book not found", 404);
  }
};

// Efface un livre par son ID
export const deleteBook = (request, response) => {
  const { id } = request.params;
  const book = bookModel.getBookById(id);

  if (book) {
    bookModel.deleteBook(id);
    APIResponse(response, null, "Book was successfully deleted", 200);
  } else {
    APIResponse(response, null, "Book not found", 404);
  }
};
