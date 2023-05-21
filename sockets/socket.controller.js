import { Server } from "socket.io";
import { verifyJWT } from "../helpers/jwt.js";

// socket = Server is only for auto-complete code
const socketController = (socket = Server) => {
	// console.log(socket.id);

	socket.on("send-message", (payload, callback) => {
		const resToken = verifyJWT(payload.token);
		console.log(payload.message);
		console.log(resToken);
		// const { uid, username, typeUser } = jwt.verify(payload.token, process.env.SECRET_JWT_SEED);
		// console.log(uid);
	});
};

export { socketController };
