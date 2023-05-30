import { request, response } from "express";
import bcrypt from "bcrypt";
import { enviarMail } from "../helpers/nodeMailer.js";

import { USER_ROLES, userModel } from "../models/user.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";
import { generateJWT } from "../helpers/jwt.js";

const getClients = async (req = request, res = response) => {
	try {
		const users = await userModel
			.find({ role: USER_ROLES.CLIENT })
			.populate([
				{
					path: "role",
					select: "role",
				},
			])
			.exec();
		res.status(200).json(users);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get clients.`);
	}
};

const getClient = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		console.log(id);
		let user = await userModel.findById(id);

		if (!user) {
			return res.status(404).json({ error: "User don't found" });
		}
		console.log(user);
		res.status(200).json({ msg: "Ok", user });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error del servidor en GET CLIENTES." });
	}
};

const createClient = async (req = request, res = response) => {
	try {
		const { names, lastnames, username, email, password, role, phoneNumber, country, state, city, urlImg, cases } =
			req.body;

		const existsUsername = await userModel.findOne({ username }).exec();

		if (existsUsername) {
			return res.status(409).json({ msg: `Username ${username} already exist.` });
		}

		const salt = bcrypt.genSaltSync();
		const encryptedPassword = bcrypt.hashSync(password, salt);

		const client = new userModel({
			names,
			lastnames,
			username,
			email,
			password: encryptedPassword,
			role,
			phoneNumber,
			country,
			state,
			city,
			urlImg,
			cases,
		});

		console.log(names, lastnames, email);
		await enviarMail(names, lastnames, email);

		await client.save();
		const token = await generateJWT(client.id, client.username, client.role._id);
		res.status(200).json({ client, token });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error del servidor en POST CLIENTES." });
	}
};

export { getClient, getClients, createClient };
