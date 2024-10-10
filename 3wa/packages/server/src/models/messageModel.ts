import { db } from "../config/pool";
import { messages } from "../schema";
import { NewMessage } from "../entities/Message";
import logger from "../utils/logger";
import { and, eq } from "drizzle-orm";

export const sendMessage = async (newMessage: NewMessage) => {
  try {
    return db.insert(messages).values(newMessage).returning().execute();
  } catch (err) {
    logger.error(err);
    throw new Error(`Erreur lors de l'envoi du message`);
  }
};

export const deleteMessage = async (data: { id: string; userId: string }) => {
  try {
    if (
      !data.id ||
      data.id?.trim()?.length < 5 ||
      !data.userId ||
      data.userId?.trim()?.length < 5
    ) {
      throw new Error("ID ou utilisateur invalide");
    }
    return db
      .delete(messages)
      .where(and(eq(messages.id, data.id), eq(messages.authorId, data.userId)))
      .execute();
  } catch (err) {
    logger.error(err);
    throw new Error(`Erreur lors de la suppression du message`);
  }
};

export const updateMessage = (
  id: string,
  authorId: string,
  updatedMessage: NewMessage
) => {
  try {
    return db
      .update(messages)
      .set(updatedMessage)
      .where(and(eq(messages.id, id), eq(messages.authorId, authorId)))
      .execute();
  } catch (error: any) {
    logger.error(`Impossible de modifier le message: ${error.message}`);
    throw new Error(`Impossible de modifier le message: ${error.message}`);
  }
};
