import { pgTable, uuid } from "drizzle-orm/pg-core";
import { books } from "./books";
import { genres } from "./genres";

export const bookGenres = pgTable("book_genres", {
  bookId: uuid("book_id").references(() => books.id, {
    onDelete: "cascade",
  }),
  genreId: uuid("genre_id").references(() => genres.id, {
    onDelete: "cascade",
  }),
});
