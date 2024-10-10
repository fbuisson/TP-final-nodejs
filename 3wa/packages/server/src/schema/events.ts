import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { authors } from "../schema/authors";

export const events = pgTable("events", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  date: varchar("date", { length: 255 }).notNull(),
  authorId: uuid("author_id")
    .references(() => authors.id, { onDelete: "cascade" })
    .notNull(),
});
