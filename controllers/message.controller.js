import { request, response } from "express";

import { messageModel } from "../models/message.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getMessage = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const message = await messageModel.findById(id).exec();

		if (!message) {
			return res.status(404).json({ error: `The message with id ${id} doesn't exist.` });
		}

		res.status(200).json(message);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the role.`);
	}
};

const getMessages = async (req = request, res = response) => {
	try {
		const messages = await messageModel.find({});
		res.status(200).json(messages);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the messages.");
	}
};

const createMessage = async (req = request, res = response) => {
	try {
		const { message, sender } = req.body;

		const newMessage = new messageModel({ message, sender });
		await newMessage.save();
		res.status(201).json(newMessage);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a message.");
	}
};

// TODO: update message y delete message
const updateMessage = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { role } = req.body;

		const existRole = await messageModel.findById(id).exec();

		if (!existRole) {
			return res.status(404).json({ error: `The role with id ${id} doesn't exist.` });
		}

		const newRole = await messageModel.findOneAndUpdate(id, { role }, { new: true });

		res.status(200).json(newRole);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to Update a role.");
	}
};

const deleteMessage = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const existRole = await messageModel.findByIdAndDelete(id);
		if (!existRole) {
			return res.status(404).json({ error: `The role with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Role with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a role.");
	}
};

export { getMessage, getMessages, createMessage, updateMessage, deleteMessage };
