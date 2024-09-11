import fs from "fs";
import { Types } from "mongoose";
import path from "path";

//// [START]
// En raison de la version ES de Node

// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
import { fileURLToPath } from "url";
import { IBook } from "../types/IBook";

// contient le chemin absolu du fichier actuel à savoir bookModel.js
const __filename = fileURLToPath(import.meta.url); // bookModel.js

// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir bookModel.js)
const __dirname = path.dirname(__filename); // J02/express/models ..... J02/express/models/bookModel.js

// On récupére le chemin vers notre fichier comments.json où est stockée toute la donnée
const bookFilePath = path.join(__dirname, "../data/books.json");
/// [END]

export const getAllBooks = () => {
  const data = fs.readFileSync(bookFilePath, "utf-8");
  return JSON.parse(data);
};

export const getBookById = (id: Types.ObjectId) => {
  const books = getAllBooks();
  return books.find((b: IBook) => b.id.equals(id));
};

export const getBooksByAuthorId = (id: Types.ObjectId) => {
  const books = getAllBooks();
  return books.filter((book: IBook) => book.author_id.equals(id));
};

export const getBooksByGenreId = (id: Types.ObjectId) => {
  const books = getAllBooks();
  return books.filter((book: IBook) => book.genres_id.includes(id));
};

export const addBook = (book: IBook) => {
  const books = getAllBooks();
  books.push(book);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const updateBook = (id: Types.ObjectId, book: IBook) => {
  const books = getAllBooks();
  const index = books.findIndex((book: IBook) => book.id.equals(id));
  if (index !== -1) books[index] = book;
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const deleteBook = (id: Types.ObjectId) => {
  const books = getAllBooks();
  const index = books.findIndex((book: IBook) => book.id.equals(id));
  if (index !== -1) books.splice(index, 1);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const deleteBooksByAuthorId = (authorId: Types.ObjectId) => {
  const books = getAllBooks();
  const filteredBooks = books.filter(
    (book: IBook) => !book.author_id.equals(authorId)
  );
  fs.writeFileSync(bookFilePath, JSON.stringify(filteredBooks, null, 2));
};

export const deleteGenreByGenreId = (id: Types.ObjectId) => {
  const books = getAllBooks();

  books.forEach((book: IBook) => {
    const index = book.genres_id.findIndex((genre_id: Types.ObjectId) =>
      genre_id.equals(id)
    );
    if (index !== -1) {
      book.genres_id.splice(index, 1);
    }
  });
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};
