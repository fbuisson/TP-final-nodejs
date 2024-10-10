import { rooms } from "../schema/rooms";
import {
  InferSelectModel,
  InferInsertModel,
  getTableColumns,
} from "drizzle-orm";

export type Room = InferSelectModel<typeof rooms>;
export type NewRoom = InferInsertModel<typeof rooms>;

export const roomsColumns = getTableColumns(rooms);
