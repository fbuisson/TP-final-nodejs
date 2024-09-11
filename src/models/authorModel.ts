import fs from "fs";
import path from "path";

//// [START]
// En raison de la version ES de Node

// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
import { fileURLToPath } from "url";
import { getBooksByAuthorId, deleteBooksByAuthorId } from "./bookModel";
import { getEventsByAuthorId, deleteEventsByAuthorId } from "./eventModel";
import { IAuthor } from "../types/IAuthor";
import { Types } from "mongoose";

// contient le chemin absolu du fichier actuel à savoir authorModel.js
const __filename = fileURLToPath(import.meta.url); // authorModel.js

// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir authorModel.js)
const __dirname = path.dirname(__filename); // J02/express/models ..... J02/express/models/authorModel.js

// On récupére le chemin vers notre fichier author.json où est stockée toute la donnée
const authorFilePath = path.join(__dirname, "../data/authors.json");
/// [END]

export const getAllAuthors = () => {
  const data = fs.readFileSync(authorFilePath, "utf-8");
  return JSON.parse(data);
};

export const getAuthorById = (id: Types.ObjectId) => {
  const authors = getAllAuthors();
  const author = authors.find((u) => u.id === id);
  if (author) {
    // On ajoute des propriété 'books' et 'events' à notre objet author qui corresponds
    // à tout les books qu'il aura écrit et tous les events auxquel il va participer
    author.books = getBooksByAuthorId(id);
    author.events = getEventsByAuthorId(id);
  }
  return author;
};

export const addAuthor = (author: IAuthor) => {
  const authors = getAllAuthors();
  authors.push(author);
  fs.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};

export const updateAuthor = (id: Types.ObjectId, author: IAuthor) => {
  const authors = getAllAuthors();
  const index = authors.findIndex((a) => a.id === id);
  if (index !== -1) authors[index] = author;
  fs.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};

export const deleteAuthor = (id: Types.ObjectId) => {
  const authors = getAllAuthors();

  const index = authors.findIndex((author: IAuthor) => author.id === id);
  if (index !== -1) authors.splice(index, 1);
  deleteBooksByAuthorId(id);
  deleteEventsByAuthorId(id);
  fs.writeFileSync(authorFilePath, JSON.stringify(authors, null, 2));
};
