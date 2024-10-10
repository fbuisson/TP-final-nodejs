import { users } from "../schema/users";
import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export const usersColumns = getTableColumns(users);
