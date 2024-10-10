import { Server, Socket } from "socket.io";
import { joinRoom, createRoom } from "./rooms";
import { postMessage, removeMessage } from "./messages";
import { authenticateSocket } from "../cookies";

export function setupSocketEvents(io: Server) {
  io.on("connection", (socket: Socket) => {
    const userId = authenticateSocket(socket);
    if (!userId) return;

    console.info(`${socket.id} connected`);

    socket.on("createRoom", (name: string) => createRoom(socket, name));
    socket.on("joinRoom", (roomId: string) => joinRoom(socket, roomId));

    socket.on("sendMessage", (data) => postMessage(socket, io, data, userId));
    socket.on("deleteMessage", (data) =>
      removeMessage(socket, io, data, userId)
    );

    socket.on("disconnect", () => {
      console.info(`${socket.id} disconnected`);
    });
  });
}
