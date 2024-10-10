import logger from "../../utils/logger";
import { sendMessage, deleteMessage } from "../../models/messageModel";
import { Server, Socket } from "socket.io";

export const postMessage = async (
  socket: Socket,
  io: Server,
  data: { authorId: string; roomId: string; content: string },
  userId: string
) => {
  try {
    const [message] = await sendMessage({ ...data, authorId: userId });
    if (!message) throw new Error("Impossible de créer le message");

    io.in(data.roomId).emit("message", {
      message: message.content,
      author: message.authorId,
      date: message.date,
      id: message.id,
    });
  } catch (err: any) {
    logger.error(`Erreur lors de l'envoi du message: ${err.message}`);
    socket.emit("error", "Impossible de créer le message");
  }
};

export const removeMessage = async (
  socket: Socket,
  io: Server,
  data: { id: string; roomId: string },
  userId: string
) => {
  try {
    await deleteMessage({ ...data, userId });
    io.in(data.roomId).emit("deletedMessage", data.id);
  } catch (err: any) {
    logger.error(`Erreur lors de la suppression du message: ${err.message}`);
    socket.emit("error", "Impossible de supprimer le message");
  }
};
