import { request, response } from "express";

import { userModel } from "../models/user.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getUsers = async (req = request, res = response) => {
	try {
		const users = await userModel.find({});
		res.status(200).json(users);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

const getUser = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const user = await userModel.findById(id).populate([{path:"role"}]);

		if (!user) {
			return res.status(404).json({ error: `The user with id ${id} doesn't exist.` });
		}

		res.status(200).json(user);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

const getUsersWithoutLogged = async (req = request, res = response) => {
	try {
		// res.status(200).json({ msg: "Hola" });
		// console.log(req.uid);
		const usersWithoutUserToken = await userModel.find({ _id: { $ne: req.uid } });
		// console.log(usersWithoutUserToken);
		res.status(200).json(usersWithoutUserToken);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

const deleteUser = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		// res.status(200).json({ msg: "Hola" });
		// console.log(req.uid);
		await userModel.findByIdAndDelete(id);
		// console.log(usersWithoutUserToken);
		res.status(204).json();
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

export { getUser, getUsers, getUsersWithoutLogged, deleteUser };
