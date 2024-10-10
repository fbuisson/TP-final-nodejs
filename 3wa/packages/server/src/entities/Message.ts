import { messages } from "../schema/messages";
import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";

export type Message = InferSelectModel<typeof messages>;
export type NewMessage = InferInsertModel<typeof messages>;

export const messagesColumns = getTableColumns(messages);
