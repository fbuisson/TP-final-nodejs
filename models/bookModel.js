import fs from "fs";
import path from "path";

//// [START]
// En raison de la version ES de Node

// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
import { fileURLToPath } from "url";

// contient le chemin absolu du fichier actuel à savoir commentModel.js
const __filename = fileURLToPath(import.meta.url); // commentModel.js

// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir postModel.js)
const __dirname = path.dirname(__filename); // J02/express/models ..... J02/express/models/postModel.js

// On récupére le chemin vers notre fichier comments.json où est stockée toute la donnée
const bookFilePath = path.join(__dirname, "../data/books.json");
/// [END]

export const getAllBooks = () => {
  const data = fs.readFileSync(bookFilePath, "utf-8");
  return JSON.parse(data);
};

export const getBookById = (id) => {
  const books = getAllBooks();
  return books.find((b) => b.id === id);
};

export const getBooksByAuthorId = (id) => {
  const books = getAllBooks();
  return books.filter((book) => book.author_id === id);
};

export const getBooksByGenreId = (id) => {
  const books = getAllBooks();
  return books.filter((book) => book.genres_id.includes(id));
};

export const addBook = (book) => {
  const books = getAllBooks();
  books.push(book);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const updateBook = (id, book) => {
  const books = getAllBooks();
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) books[index] = book;
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const deleteBook = (id) => {
  const books = getAllBooks();
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) books.splice(index, 1);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const deleteBooksByAuthorId = (authorId) => {
  const books = getAllBooks();
  const filteredBooks = books.filter((book) => book.author_id !== authorId);
  fs.writeFileSync(bookFilePath, JSON.stringify(filteredBooks, null, 2));
};

export const deleteGenreByGenreId = (id) => {
  const books = getAllBooks();

  books.forEach((book) => {
    const index = book.genres_id.findIndex((genre_id) => genre_id === id);
    if (index !== -1) {
      book.genres_id.splice(index, 1);
    }
  });
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};
