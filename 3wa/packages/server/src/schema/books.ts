import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { authors } from "./authors";
import { genres } from "./genres";

export const books = pgTable("books", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  genresId: uuid("genres_id").references(() => genres.id, {
    onDelete: "set null",
  }),
  authorId: uuid("author_id").references(() => authors.id, {
    onDelete: "cascade",
  }),
});
