import { pgTable, integer, varchar, uuid } from "drizzle-orm/pg-core";

export const authors = pgTable("authors", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  nationality: varchar("nationality", { length: 255 }).notNull(),
});
