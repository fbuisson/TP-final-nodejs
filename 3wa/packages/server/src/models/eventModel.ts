import { db } from "../config/pool";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";
import { Event, NewEvent } from "../entities/Event";
import { events, authors } from "../schema";

export const getAllEvents = async () => {
  try {
    return db
      .select({
        id: events.id,
        name: events.name,
        address: events.address,
        date: events.date,
        author: {
          name: authors.id,
        },
      })
      .from(events)
      .leftJoin(authors, eq(events.authorId, authors.id))
      .execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération des évènements: ${err.message}`
    );
    return;
  }
};

export const getEventById = async (id: string) => {
  try {
    return db
      .select({
        id: events.id,
        name: events.name,
        address: events.address,
        date: events.date,
        author: {
          name: authors.id,
        },
      })
      .from(events)
      .leftJoin(authors, eq(events.authorId, authors.id))
      .where(eq(events.id, id))
      .execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération de l'évènement: ${err.message}`
    );
    return null;
  }
};

export const addEvent = (event: NewEvent) => {
  try {
    return db.insert(events).values(event).returning().execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la création de l'évènement: ${err.message}`);
    return null;
  }
};

export const updateEvent = async (id: string, event: Partial<Event>) => {
  try {
    return db.update(events).set(event).where(eq(events.id, id)).execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la mise à jour de l'évènement: ${err.message}`
    );
    return null;
  }
};

export const deleteEvent = async (id: string) => {
  try {
    return db.delete(events).where(eq(events.id, id)).execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la suppression de l'évènement: ${err.message}`
    );
    return null;
  }
};

export const deleteEventsByAuthorId = async (authorId: string) => {
  try {
    return db.delete(events).where(eq(events.authorId, authorId)).execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la suppression de l'évènement par id d'auteur: ${err.message}`
    );
    return null;
  }
};

export const getEventsByAuthorId = async (authorId: string) => {
  try {
    return db
      .select({
        id: events.id,
        name: events.name,
        address: events.address,
        date: events.date,
        author: {
          name: authors.id,
        },
      })
      .from(events)
      .where(eq(events.authorId, authorId))
      .execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération des l'évènement par auteur: ${err.message}`
    );
    return null;
  }
};
