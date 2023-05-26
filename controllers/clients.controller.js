import { request, response } from "express";
import bcrypt from "bcrypt";
import { enviarMail } from "../helpers/nodeMailer.js";

// import clientModel from "../models/client.model.js";
import { userModel } from "../models/user.model.js";

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

		console.log(names, lastnames, email)
		await enviarMail(names, lastnames, email)

		await client.save();
		res.status(200).json({ msg: "Ok", client });

	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error del servidor en POST CLIENTES." });
	}
};

export { getClient, createClient };
