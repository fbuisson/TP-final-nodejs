import { genres } from "../schema/genres";
import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";

export type Genre = InferSelectModel<typeof genres>;
export type NewGenre = InferInsertModel<typeof genres>;

export const genresColumns = getTableColumns(genres);
