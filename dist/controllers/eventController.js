"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.deleteEvent = exports.createEvent = exports.getEvent = exports.getEvents = void 0;
const models_1 = require("../models");
const response_1 = require("../utils/response");
const mongoose_1 = require("mongoose");
const getEvents = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield models_1.eventModel.getAllEvents();
        (0, response_1.APIResponse)(response, events, "List of all events");
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error fetching events", 500);
    }
});
exports.getEvents = getEvents;
const getEvent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const event = yield models_1.eventModel.getEventById(new mongoose_1.Types.ObjectId(id));
        if (event) {
            (0, response_1.APIResponse)(response, event, "Event found");
        }
        else {
            (0, response_1.APIResponse)(response, null, "Event not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error fetching event", 500);
    }
});
exports.getEvent = getEvent;
const createEvent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const newEvent = request.body;
    const authorId = new mongoose_1.Types.ObjectId(newEvent.author_id);
    try {
        const author = yield models_1.authorModel.getAuthorById(authorId);
        if (author) {
            const createdEvent = yield models_1.eventModel.addEvent(newEvent);
            (0, response_1.APIResponse)(response, createdEvent, "Event created", 201);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Author does not exist", 400);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error creating event", 500);
    }
});
exports.createEvent = createEvent;
const deleteEvent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const event = yield models_1.eventModel.getEventById(new mongoose_1.Types.ObjectId(id));
        if (event) {
            yield models_1.eventModel.deleteEvent(new mongoose_1.Types.ObjectId(id));
            (0, response_1.APIResponse)(response, null, "Event deleted", 204);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Event not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error deleting event", 500);
    }
});
exports.deleteEvent = deleteEvent;
const updateEvent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const newEvent = request.body;
    try {
        const event = yield models_1.eventModel.getEventById(new mongoose_1.Types.ObjectId(id));
        const author = yield models_1.authorModel.getAuthorById(new mongoose_1.Types.ObjectId(newEvent.author_id));
        if (event && author) {
            const updatedEvent = yield models_1.eventModel.updateEvent(new mongoose_1.Types.ObjectId(id), newEvent);
            (0, response_1.APIResponse)(response, updatedEvent, "Event updated", 200);
        }
        else {
            (0, response_1.APIResponse)(response, null, "Event or Author not found", 404);
        }
    }
    catch (err) {
        console.error(err);
        (0, response_1.APIResponse)(response, null, "Error updating event", 500);
    }
});
exports.updateEvent = updateEvent;
