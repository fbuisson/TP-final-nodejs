import fs from "fs";
import path from "path";

//// [START]
// En raison de la version ES de Node

// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
import { fileURLToPath } from "url";
import { findBooksByGenreId, deleteGenreByGenreId } from "./bookModel";

// contient le chemin absolu du fichier actuel à savoir authorModel.js
const __filename = fileURLToPath(import.meta.url); // authorModel.js

// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir postModel.js)
const __dirname = path.dirname(__filename); // J02/express/models ..... J02/express/models/postModel.js

// On récupére le chemin vers notre fichier author.json où est stockée toute la donnée
const genreFilePath = path.join(__dirname, "../data/author.json");
/// [END]

export const getAllGenres = () => {
  const data = fs.readFileSync(genreFilePath, "utf-8");
  return JSON.parse(data);
};

export const getGenreById = (id) => {
  const genres = getAllGenres();
  const genre = genres.find((g) => g.id === id);

  if (genre) genre.books = getBooksByGenreId(id);
  return genre;
};

export const addGenre = (genre) => {
  const genres = getAllGenres();
  genres.push(genre);
  fs.writeFileSync(bookFilePath, JSON.stringify(books, null, 2));
};

export const updateGenreById = (id, genre) => {
  const genres = getAllGenres();
  const index = genres.findIndex((g) => g.id === id);
  if (index !== -1) genres[index] = genre;
  fs.writeFileSync(genreFilePath, JSON.stringify(genres, null, 2));
};

export const deleteGenreById = (id) => {
  let genres = getAllGenres();
  const index = genres.findIndex((g) => g.id === id);
  if (index !== -1) genres.splice(index, 1);
  deleteGenreByGenreId(id);
  fs.writeFileSync(genreFilePath, JSON.stringify(genres, null, 2));
};
