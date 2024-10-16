import { Request, Response } from "express";
import { eventModel, authorModel } from "../models";
import { APIResponse } from "../utils/response";

export const getEvents = async (request: Request, response: Response) => {
  try {
    const events = await eventModel.getAllEvents();
    APIResponse(response, events, "List of all events");
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error fetching events", 500);
  }
};

export const getEvent = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const event = await eventModel.getEventById(id);
    if (event) {
      APIResponse(response, event, "Event found");
    } else {
      APIResponse(response, null, "Event not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error fetching event", 500);
  }
};

export const createEvent = async (request: Request, response: Response) => {
  const newEvent = request.body;
  const authorId = newEvent.author_id;

  try {
    const author = await authorModel.getAuthorById(authorId);
    if (author) {
      const createdEvent = await eventModel.addEvent(newEvent);
      APIResponse(response, createdEvent, "Event created", 201);
    } else {
      APIResponse(response, null, "Author does not exist", 400);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error creating event", 500);
  }
};

export const deleteEvent = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const event = await eventModel.getEventById(id);
    if (event) {
      await eventModel.deleteEvent(id);
      APIResponse(response, null, "Event deleted", 204);
    } else {
      APIResponse(response, null, "Event not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error deleting event", 500);
  }
};

export const updateEvent = async (request: Request, response: Response) => {
  const { id } = request.params;
  const newEvent = request.body;
  try {
    const event = await eventModel.getEventById(id);
    const author = await authorModel.getAuthorById(newEvent.author_id);

    if (event && author) {
      const updatedEvent = await eventModel.updateEvent(id, newEvent);
      APIResponse(response, updatedEvent, "Event updated", 200);
    } else {
      APIResponse(response, null, "Event or Author not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error updating event", 500);
  }
};
