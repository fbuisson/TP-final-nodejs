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

export const findAllBooks = () => {
  const data = fs.readFileSync(bookFilePath, "utf-8");
  return JSON.parse(data);
};

export const findBookById = (id) => {
  const books = findAllBooks();
  return books.find((book) => book.id === id);
};

export const addBook = (book) => {
  const books = findAllBooks();
  books.push(book);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const deleteBookById = (id) => {
  const books = findAllBooks();
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) books.splice(index, 1);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const updateBookById = (id, book) => {
  const books = findAllBooks();
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = book;
  }
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 3));
};

export const findBooksByAuthorId = (id) => {
  const books = findAllBooks();
  return books.filter((book) => book.author_id === id);
};
