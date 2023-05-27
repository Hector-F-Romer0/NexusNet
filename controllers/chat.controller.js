import { request, response } from "express";

import { handleErrorHTTP } from "../helpers/handleError.js";
import { chatModel } from "../models/chat.model.js";

const getChat = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const chat = await chatModel.findById(id).populate([
			{
				path: "users",
				select: "id username",
			},
			{
				path: "messages",
				select: "message",
			},
		]);
		res.status(200).json(chat);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get a chat.");
	}
};

const getChats = async (req = request, res = response) => {
	try {
		const chats = await chatModel.find({}).populate([
			{
				path: "users",
				select: "id username",
			},
			{
				path: "messages",
				select: "message",
			},
		]);
		res.status(200).json(chats);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get chats.");
	}
};

const createChat = async (req = request, res = response) => {
	try {
		const { userForCreatingChat } = req.body;
		const uid = req.uid;
		// TODO: VERIFICAR QUE LOS DOS USUARIOS NO TENGAN UN CHAT
		// const existingChat = await chatModel
		// 	.findOne({ users: [uid, userForCreatingChat] })
		// 	.populate("messages")
		// 	.exec();

		const existingChat = await chatModel
			.findOne({ $and: [{ users: { $all: [userForCreatingChat, uid] } }] })
			.populate("messages")
			.exec();
		// console.log(existingChat);
		if (existingChat) {
			return res.status(409).json({ msg: "Chat ya existe.", existingChat: existingChat, userIdSesion: uid });
		}

		// TODO: Si debo verificar el token de la persona para llegar a este controlador, no hay necesidad de verificar el token, pues ya se verificaría en el middleware y no es necesario verificarlo dentro de este controlador.

		// console.log(uid);
		// console.log(userForCreatingChat);

		// Create a chat document with the users that participate in the chat without messages.
		const newChat = new chatModel({ users: [uid, userForCreatingChat] });
		newChat.save();
		// const newMessage = new ({ message, sender });

		res.status(201).json({ msg: "Chat created", newChat, userIdSesion: uid });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a message.");
	}
};

const updateChat = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const existingChat = await chatModel.findById(id);

		if (existingChat) {
			return res.status(409).json({ msg: "Chat ya existe.", existingChat: existingChat, userIdSesion: uid });
		}
		const updatedChat = await chatModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
		res.status(200).json(updatedChat);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to uodate a chat.");
	}
};

const deleteChat = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		await chatModel.findByIdAndDelete(id);
		res.status(204).json({});
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a chat.");
	}
};

export { getChat, getChats, createChat, updateChat, deleteChat };
