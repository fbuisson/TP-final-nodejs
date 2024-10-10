import { relations } from "drizzle-orm";
import {
  books,
  bookGenres,
  authors,
  genres,
  events,
  messages,
  rooms,
  users,
} from "./";

export const booksRelation = relations(books, ({ many, one }) => ({
  author: one(authors),
  genres: many(bookGenres),
}));

export const authorsRelation = relations(authors, ({ many }) => ({
  book: many(books),
  event: many(events),
}));

export const bookGenresRelation = relations(bookGenres, ({ one }) => ({
  book: one(books),
  genre: one(genres),
}));

export const genresRelation = relations(genres, ({ many }) => ({
  books: many(books),
}));

export const eventsRelation = relations(events, ({ many }) => ({
  author: many(authors),
}));

export const roomsRelation = relations(messages, ({ many }) => ({
  room: many(messages),
}));

export const messagesRelation = relations(messages, ({ one }) => ({
  room: one(rooms, {
    fields: [messages.roomId],
    references: [rooms.id],
  }),
  user: one(users, {
    fields: [messages.authorId],
    references: [users.id],
  }),
}));
