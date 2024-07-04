import fs from "fs";
import path from "path";

//// [START]
// En raison de la version ES de Node

// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
import { fileURLToPath } from "url";

// contient le chemin absolu du fichier actuel à savoir authorModel.js
const __filename = fileURLToPath(import.meta.url); // authorModel.js

// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir postModel.js)
const __dirname = path.dirname(__filename); // J02/express/models ..... J02/express/models/postModel.js

// On récupére le chemin vers notre fichier author.json où est stockée toute la donnée
const eventFilePath = path.join(__dirname, "../data/author.json");
/// [END]

export const getAllEvents = () => {
  const data = fs.readFileSync(eventFilePath, "utf-8");
  return JSON.parse(data);
};

export const getEventById = (id) => {
  const events = getAllEvents();
  return events.find((event) => event.id === id);
};

export const addEvent = (event) => {
  const events = getAllEvents();
  events.push(event);
  fs.writeFileSync(eventFilePath, JSON.stringify(events, null, 2));
};

export const deleteEventById = (id) => {
  const events = getAllEvents();
  const index = events.findIndex((event) => event.id === id);
  if (index !== -1) events.splice(index, 1);
  fs.writeFileSync(eventFilePath, JSON.stringify(events, null, 2));
};

export const deleteEventsByAuthorId = (authorId) => {
  const events = getAllEvents();
  const filteredEvents = events.filter((event) => event.author_id !== authorId);
  fs.writeFileSync(eventFilePath, JSON.stringify(filteredEvents, null, 2));
};

export const updateEventById = (id, event) => {
  const events = getAllEvents();
  const index = events.findIndex((event) => event.id === id);
  if (index !== -1) events[index] = event;
  fs.writeFileSync(eventFilePath, JSON.stringify(events, null, 2));
};

export const getEventsByAuthorId = (id) => {
  const events = getAllEvents();
  return events.find((event) => event.author_id === id);
};
