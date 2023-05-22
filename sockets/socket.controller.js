import { Server } from "socket.io";

import { verifyJWT } from "../helpers/jwt.js";
import { messageModel } from "../models/message.model.js";
import { chatModel } from "../models/chat.model.js";

let activeUsers = [];
// socket = Server is only for auto-complete code
const socketController = (socket = Server) => {
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

	socket.on("send-message", async (payload, callback) => {
		const { uid, username, role } = verifyJWT(payload.token);
		// console.log(payload.message);
		// console.log(resToken);

		// Verify if chat exists in BD
		const existingChat = await chatModel.findById(payload.chatId);

		const newMessage = new messageModel({ message: payload.message, sender: uid });
		// console.log(payload.message);
		// console.log(uid);
		await newMessage.save();
		// Add the new message to chat document
		existingChat.messages.push(newMessage);
		// console.log(existingChat);
		await existingChat.save();

		// await chatModel.findByIdAndUpdate(payload.chatId,{message:})
		// console.log(newMessage);
		// console.log(payload);
		// const { uid, username, typeUser } = jwt.verify(payload.token, process.env.SECRET_JWT_SEED);
		// console.log(uid);
	});
};

export { socketController };
