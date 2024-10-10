import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const genres = pgTable("genres", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});
