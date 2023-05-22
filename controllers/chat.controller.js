import { request, response } from "express";

import { handleErrorHTTP } from "../helpers/handleError.js";
import { chatModel } from "../models/chat.model.js";

const createChat = async (req = request, res = response) => {
	try {
		// TODO: Si debo verificar el token de la persona para llegar a este controlador, no hay necesidad de verificar el token, pues ya se verificaría en el middleware y no es necesario verificarlo dentro de este controlador.
		const { userForCreatingChat } = req.body;
		const uid = req.uid;
		console.log(uid);
		console.log(userForCreatingChat);

		// Create a chat document with the users that participate in the chat without messages.
		const newChat = new chatModel({ users: [uid, userForCreatingChat] });
		newChat.save();
		// const newMessage = new ({ message, sender });

		res.status(201).json({ msg: "ok", newChat });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a message.");
	}
};

export { createChat };
