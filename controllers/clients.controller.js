import { request, response } from "express";
import bcrypt from "bcrypt";

import clientModel from "../models/client.model.js";

const getClient = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		console.log(id);
		let user = await clientModel.findById(id);

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
		const {
			names,
			lastnames,
			username,
			email,
			password,
			typeUser,
			phoneNumber,
			country,
			state,
			city,
			urlImg,
			cases,
		} = req.body;

		const salt = bcrypt.genSaltSync();
		const encryptedPassword = bcrypt.hashSync(password, salt);

		const client = new clientModel({
			names,
			lastnames,
			username,
			email,
			password: encryptedPassword,
			typeUser,
			phoneNumber,
			country,
			state,
			city,
			urlImg,
			cases,
		});

		await client.save();
		res.status(200).json({ msg: "Ok", client });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error del servidor en POST CLIENTES." });
	}
};

export { getClient, createClient };
