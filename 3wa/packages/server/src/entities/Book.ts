import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";
import { books } from "../schema/books";

export type Book = InferSelectModel<typeof books>;
export type NewBook = InferInsertModel<typeof books>;
export const booksColumns = getTableColumns(books);
