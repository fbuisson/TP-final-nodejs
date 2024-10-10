import { Server, Socket } from "socket.io";
import logger from "../../utils/logger";
import { addRoom, getMessagesByRoomId } from "../../models/roomModel";
import { NewRoom } from "../../entities/Room";

export const joinRoom = async (socket: Socket, room: string) => {
  try {
    const messages = await getMessagesByRoomId(room);
    socket.join(room);
    socket.emit("messages", messages);
  } catch (error: any) {
    logger.error(
      `Erreur lors de la récupération des messages: ${error.message}`
    );
    socket.emit("error", "Impossible de rejoindre la salle");
  }
};

export const createRoom = async (socket: Socket, name: string) => {
  try {
    logger.info("Création d'une nouvelle salle");
    const newRoom: NewRoom = {
      name: name,
    };
    const room = await addRoom(newRoom);

    socket.emit("room", room);
  } catch (error: any) {
    logger.error(`Erreur lors de la création de la salle: ${error.message}`);
    socket.emit("error", "Impossible de créer la salle");
  }
};
