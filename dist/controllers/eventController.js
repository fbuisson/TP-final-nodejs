"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.deleteEvent = exports.createEvent = exports.getEvent = exports.getEvents = void 0;
const index_js_1 = require("../models/index.js");
const response_js_1 = require("../utils/response.js");
const crypto_1 = __importDefault(require("crypto"));
const getEvents = (request, response) => {
    const events = index_js_1.eventModel.getAllEvents();
    (0, response_js_1.APIResponse)(response, events, "List of all events");
};
exports.getEvents = getEvents;
const getEvent = (request, response) => {
    const { id } = request.params;
    const event = index_js_1.eventModel.getEventById(id);
    if (event) {
        (0, response_js_1.APIResponse)(response, event, "Event found");
    }
    else {
        (0, response_js_1.APIResponse)(response, null, "Event not found", 404);
    }
};
exports.getEvent = getEvent;
const createEvent = (request, response) => {
    const newEvent = request.body;
    const authorId = newEvent.author_id;
    if (index_js_1.authorModel.getAuthorById(authorId)) {
        newEvent.id = crypto_1.default.randomUUID();
        index_js_1.eventModel.addEvent(newEvent);
        (0, response_js_1.APIResponse)(response, newEvent, "Event created", 201);
    }
    else {
        (0, response_js_1.APIResponse)(response, null, "Author does not exist", 400);
    }
};
exports.createEvent = createEvent;
const deleteEvent = (request, response) => {
    const id = request.params.id;
    const event = index_js_1.eventModel.getEventById(id);
    if (event) {
        index_js_1.eventModel.deleteEvent(id);
        (0, response_js_1.APIResponse)(response, null, "Event deleted", 204);
    }
    else
        (0, response_js_1.APIResponse)(response, null, "Event not found", 404);
};
exports.deleteEvent = deleteEvent;
const updateEvent = (request, response) => {
    const id = request.params.id;
    const newEvent = request.body;
    const author = index_js_1.authorModel.getAuthorById(newEvent.author_id);
    const event = index_js_1.eventModel.getEventById(id);
    if (event && author) {
        index_js_1.eventModel.updateEvent(id, newEvent);
        (0, response_js_1.APIResponse)(response, post, "Event updated", 200);
    }
    else
        (0, response_js_1.APIResponse)(response, null, "Event or Author not found", 404);
};
exports.updateEvent = updateEvent;
