import fs from "fs";
import path from "path";

//// [START]
// En raison de la version ES de Node

// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
import { fileURLToPath } from "url";
import { findBooksByAuthorId } from "./bookModel.js";
import { deleteBookById } from "./bookModel.js";

// contient le chemin absolu du fichier actuel à savoir authorModel.js
const __filename = fileURLToPath(import.meta.url); // authorModel.js

// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir postModel.js)
const __dirname = path.dirname(__filename); // J02/express/models ..... J02/express/models/postModel.js

// On récupére le chemin vers notre fichier author.json où est stockée toute la donnée
const authorFilePath = path.join(__dirname, "../data/author.json");
/// [END]

export const getAllAuthors = () => {
  const data = fs.readFileSync(authorFilePath, "utf-8");
  return JSON.parse(data);
};

export const getAuthorById = (id) => {
  const authors = getAllAuthors();
  const author = authors.find((u) => u.id === id);
  if (author) {
    // On ajoute une propriété 'books' à notre objet author qui corresponds
    // à tout les books qu'il aura écrit
    author.books = findBooksByAuthorId(id);
  }
  return author;
};

export const addAuthor = (author) => {
  const authors = getAllAuthors();
  authors.push(author);
  fs.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};

export const deleteAuthor = (id) => {
  const authors = getAllAuthors();
  const books = findBooksByAuthorId(id);

  const index = authors.findIndex((author) => author.id === id);
  if (index !== -1) authors.splice(index, 1);
  fs.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));

  if (books.length) {
    books.map((book) => {
      deleteBookById(book.id);
    });
  }
};
