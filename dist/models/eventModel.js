"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsByAuthorId = exports.deleteEventsByAuthorId = exports.deleteEvent = exports.updateEvent = exports.addEvent = exports.getEventById = exports.getAllEvents = void 0;
const events_1 = __importDefault(require("../schema/events"));
const getAllEvents = () => {
    try {
        return events_1.default.find().exec();
    }
    catch (err) {
        console.error(err);
        return [];
    }
};
exports.getAllEvents = getAllEvents;
const getEventById = (id) => {
    try {
        const event = events_1.default.findById(id).exec();
        return event;
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.getEventById = getEventById;
const addEvent = (event) => {
    try {
        return events_1.default.create(event);
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.addEvent = addEvent;
const updateEvent = (id, event) => {
    try {
        return events_1.default.updateOne({ _id: id }, event).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = (id) => {
    try {
        return events_1.default.deleteOne(id).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.deleteEvent = deleteEvent;
const deleteEventsByAuthorId = (authorId) => {
    try {
        return events_1.default.deleteOne({ author: authorId }).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.deleteEventsByAuthorId = deleteEventsByAuthorId;
const getEventsByAuthorId = (authorId) => {
    try {
        return events_1.default.find({ author: authorId }).exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
};
exports.getEventsByAuthorId = getEventsByAuthorId;
