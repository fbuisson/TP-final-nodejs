import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";
import { authors } from "../schema/authors";

export type Author = InferSelectModel<typeof authors>;
export type NewAuthor = InferInsertModel<typeof authors>;
export const authorsColumns = getTableColumns(authors);
