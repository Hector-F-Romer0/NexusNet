import { request, response } from "express";

import { USER_ROLES, userModel } from "../models/user.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";
import { generateJWT } from "../helpers/jwt.js";

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
		const user = await userModel.findById(id).populate([{ path: "role" }]);

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
		const usersWithoutUserToken = await userModel.find({ _id: { $ne: req.uid }, role: { $ne: USER_ROLES.ADMIN } });
		// console.log(usersWithoutUserToken);
		res.status(200).json(usersWithoutUserToken);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

const getUserByEmail = async (req = request, res = response) => {
	try {
		const { email } = req.body;
		// res.status(200).json({ msg: "Hola" });
		// console.log(req.uid);
		const user = await userModel.findOne({ email }).exec();

		if (!user) {
			return res.status(404).json({ error: `The user with email ${email} doesn't exist.` });
		}
		const token = await generateJWT(user.id, user.username, user.role._id);
		// const usersWithoutUserToken = await userModel.find({ _id: { $ne: req.uid }, role: { $ne: USER_ROLES.ADMIN } });
		// console.log(usersWithoutUserToken);
		res.status(200).json({ user, token, role: user.role._id });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

const existUserByEmail = async (req = request, res = response) => {
	try {
		const { email } = req.body;
		// res.status(200).json({ msg: "Hola" });
		// console.log(req.uid);
		const user = await userModel.findOne({ email }).exec();

		if (user) {
			return res.status(400).json({ error: `The user with email ${email} already exist.` });
		}
		res.status(200).json({ msg: "Don't exist" });
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

export { getUser, getUsers, getUsersWithoutLogged, deleteUser, getUserByEmail, existUserByEmail };
