import { relations } from "drizzle-orm";
import { books, authors, genres, events } from "./";

export const booksRelations = relations(books, ({ many, one }) => ({
  author: one(authors),
  genre: many(genres),
}));

export const authorsRelation = relations(authors, ({ many }) => ({
  book: many(books),
  event: many(events),
}));

export const genresRelation = relations(genres, ({ many }) => ({
  book: many(books),
}));

export const eventsRelation = relations(events, ({ many }) => ({
  author: many(authors),
}));
