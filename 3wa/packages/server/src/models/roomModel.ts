import { db } from "../config/pool";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";
import { Room, NewRoom } from "../entities/Room";
import { rooms } from "../schema/rooms";
import { messages } from "../schema/messages";
import { users } from "../schema/users";

export const addRoom = async (room: NewRoom) => {
  try {
    return db
      .insert(rooms)
      .values(room)
      .returning({ id: rooms.id, name: rooms.name })
      .execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la création d'une nouvelle room: ${err.message}`
    );
    return null;
  }
};

export const getMessagesByRoomId = async (id: string) => {
  try {
    return db
      .select({
        id: messages.id,
        content: messages.content,
        author: users.name,
        roomId: messages.roomId,
        room: rooms.name,
        date: messages.date,
      })
      .from(messages)
      .leftJoin(rooms, eq(messages.roomId, id))
      .where(eq(messages.roomId, id));
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération des messages: ${err.message}`);
    return null;
  }
};
