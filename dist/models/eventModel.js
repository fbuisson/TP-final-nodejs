"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsByAuthorId = exports.deleteEventsByAuthorId = exports.deleteEvent = exports.updateEvent = exports.addEvent = exports.getEventById = exports.getAllEvents = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//// [START]
// En raison de la version ES de Node
// on importe fileUrlToPath qui converti une url de fichier en chemin de fichier
const url_1 = require("url");
// contient le chemin absolu du fichier actuel à savoir eventModel.js
const __filename = (0, url_1.fileURLToPath)(import.meta.url); // eventModel.js
// renvoi le repertoire (dossier) contenant le fichier (contient le chemin absolu du fichier actuel à savoir eventModel.js)
const __dirname = path_1.default.dirname(__filename); // J02/express/models ..... J02/express/models/eventModel.js
// On récupére le chemin vers notre fichier event.json où est stockée toute la donnée
const eventFilePath = path_1.default.join(__dirname, "../data/events.json");
/// [END]
const getAllEvents = () => {
    const data = fs_1.default.readFileSync(eventFilePath, "utf-8");
    return JSON.parse(data);
};
exports.getAllEvents = getAllEvents;
const getEventById = (id) => {
    const events = (0, exports.getAllEvents)();
    return events.find((event) => event.id === id);
};
exports.getEventById = getEventById;
const addEvent = (event) => {
    const events = (0, exports.getAllEvents)();
    events.push(event);
    fs_1.default.writeFileSync(eventFilePath, JSON.stringify(events, null, 2));
};
exports.addEvent = addEvent;
const updateEvent = (id, event) => {
    const events = (0, exports.getAllEvents)();
    const index = events.findIndex((event) => event.id === id);
    if (index !== -1)
        events[index] = event;
    fs_1.default.writeFileSync(eventFilePath, JSON.stringify(events, null, 2));
};
exports.updateEvent = updateEvent;
const deleteEvent = (id) => {
    const events = (0, exports.getAllEvents)();
    const index = events.findIndex((event) => event.id === id);
    if (index !== -1)
        events.splice(index, 1);
    fs_1.default.writeFileSync(eventFilePath, JSON.stringify(events, null, 2));
};
exports.deleteEvent = deleteEvent;
const deleteEventsByAuthorId = (authorId) => {
    const events = (0, exports.getAllEvents)();
    const filteredEvents = events.filter((event) => event.author_id !== authorId);
    fs_1.default.writeFileSync(eventFilePath, JSON.stringify(filteredEvents, null, 2));
};
exports.deleteEventsByAuthorId = deleteEventsByAuthorId;
const getEventsByAuthorId = (id) => {
    const events = (0, exports.getAllEvents)();
    return events.filter((event) => event.author_id === id);
};
exports.getEventsByAuthorId = getEventsByAuthorId;
