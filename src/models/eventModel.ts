import { Types } from "mongoose";
import { IEvent } from "../types/IEvent";
import Event from "../schema/events";

export const getAllEvents = () => {
  try {
    return Event.find().exec();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getEventById = (id: Types.ObjectId) => {
  try {
    const event = Event.findById(id).exec();
    return event;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addEvent = (event: IEvent) => {
  try {
    return Event.create(event);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateEvent = (id: Types.ObjectId, event: IEvent) => {
  try {
    return Event.updateOne({ _id: id }, event).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteEvent = (id: Types.ObjectId) => {
  try {
    return Event.deleteOne(id).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteEventsByAuthorId = (authorId: Types.ObjectId) => {
  try {
    return Event.deleteOne({ author: authorId }).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getEventsByAuthorId = (authorId: Types.ObjectId) => {
  try {
    return Event.find({ author: authorId }).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};
