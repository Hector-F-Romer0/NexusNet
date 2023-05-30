import { Server } from "socket.io";

import { verifyJWT } from "../helpers/jwt.js";
import { messageModel } from "../models/message.model.js";
import { chatModel } from "../models/chat.model.js";

let activeUsers = [];

// socket = Server is only for auto-complete code
const socketController = (socket = Server, io) => {
	// console.log(socket.id);
	// Add new user to active users
	socket.on("new-user", (payload) => {
		if (!activeUsers.some((user) => user.id === payload.id)) {
			activeUsers.push({
				userId: payload.id,
				socketId: socket.id,
			});
		}
	});

	socket.on("enter-chat", async (payload, callback) => {
		const chatId = payload.chatId;
		console.log(chatId);
		socket.join(chatId);
		const sockets = await io.in(chatId).fetchSockets();
		console.log(sockets);
		for (const iterator of sockets) {
			console.log("Un usuario en esta sala");
		}
		// console.log("----------------------------------");
	});

	socket.on("send-message", async (payload) => {
		try {
			const { chatId, message, token } = payload;
			const { uid, username, role } = verifyJWT(token);
			// console.log(payload);
			console.log(message);

			// Verify if chat exists in BD
			const existingChat = await chatModel.findById(chatId);

			// Create Message in BD
			const newMessage = new messageModel({ message: message, sender: uid });
			await newMessage.save();

			// Add the new message to chat document
			existingChat.messages.push(newMessage);
			await existingChat.save();
			// console.log(chatId);
			io.to(chatId).emit("send-message", newMessage);
		} catch (error) {
			socket.emit("error", { error: error });
		}
	});
};

export { socketController };
