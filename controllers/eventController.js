import { eventModel } from "../models";
import { APIResponse } from "../utils/response.js";

export const getEvents = (request, response) => {
  const events = eventModel.getAllEvents();
  APIResponse(response, events, "List of all events");
};

export const getEvent = (request, response) => {
  const { id } = request.params;
  const event = eventModel.getEventById(id);
  if (event) {
    APIResponse(response, event, "Event found");
  } else {
    APIResponse(response, null, "Event not found", 404);
  }
};

export const createEvent = (request, response) => {
  const newEvent = request.body;
  newEvent.id = crypto.randomUUID();
  eventModel.addEvent(newEvent);
  APIResponse(response, newEvent, "Event created", 201);
};

export const deleteEvent = (request, response) => {
  const id = request.params.id;
  const event = eventModel.getEventById(id);
  if (event) {
    eventModel.deleteEvent(id);
    APIResponse(response, null, "Event deleted", 204);
  } else APIResponse(response, null, "Event not found", 404);
};

export const updateEvent = (request, response) => {
  const id = request.params.id;
  const newEvent = request.body;
  const event = eventModel.getEventById(id);
  if (event) {
    eventModel.updateEvent(id, new Event());
    APIResponse(response, post, "Event updated", 200);
  } else APIResponse(response, null, "Event not found", 404);
};
