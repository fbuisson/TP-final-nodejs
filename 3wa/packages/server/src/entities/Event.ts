import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";
import { events } from "../schema/events";

export type Event = InferSelectModel<typeof events>;
export type NewEvent = InferInsertModel<typeof events>;
export const eventsColumns = getTableColumns(events);
