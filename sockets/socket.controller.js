import { Server } from "socket.io";
import { verifyJWT } from "../helpers/jwt.js";
import { messageModel } from "../models/message.model.js";

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
		const newMessage = new messageModel({ message: payload.message, sender: uid });
		console.log(newMessage);
		await newMessage.save();
		// const { uid, username, typeUser } = jwt.verify(payload.token, process.env.SECRET_JWT_SEED);
		// console.log(uid);
	});
};

export { socketController };
