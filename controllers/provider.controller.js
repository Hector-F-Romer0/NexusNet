import { request, response } from "express";
import bcrypt from "bcrypt";

import { USER_ROLES, userModel } from "../models/user.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";
import { commentModel } from "../models/comment.model.js";

const getProvider = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const provider = await userModel.findById(id).exec();

		if (!provider) {
			return res.status(404).json({ error: `The provider with id ${id} doesn't exist.` });
		}
		res.status(200).json(provider);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the provider.`);
	}
};

const getProviders = async (req = request, res = response) => {
	try {
		const providers = await userModel.find({ role: USER_ROLES.PROVIDER }).exec();
		res.status(200).json(providers);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

const createProvider = async (req = request, res = response) => {
	try {
		const {
			names,
			lastnames,
			username,
			email,
			password,
			role,
			phoneNumber,
			country,
			state,
			city,
			urlImg,
			cases,
			rate,
			category,
			service,
			keywords,
			phrase,
		} = req.body;

		const existsUsername = await userModel.findOne({ username }).exec();
		if (existsUsername) {
			return res.status(409).json({ msg: `Username ${username} already exist.` });
		}
		console.log(keywords);
		const salt = bcrypt.genSaltSync();
		const encryptedPassword = bcrypt.hashSync(password, salt);

		//! Sin usar middlewares de validación, al recibir keywords como "undefined" deja crear el documento pese a que en el Schema tiene la propiedad required:true
		// !ACEPTA UN ID DE MONGO QUE NO EXISTE
		const provider = new userModel({
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
			rate,
			category,
			service,
			keywords,
			phrase,
		});

		await provider.save();
		res.status(200).json(provider);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a provider.");
	}
};

const updateProvider = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const provider = await userModel.findById(id).exec();

		if (!provider) {
			return res.status(404).json({ error: `The provider with id ${id} doesn't exist.` });
		}

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
			rate,
			category,
			service,
			keywords,
			phrase,
		} = req.body;

		const newProvider = await userModel.findOneAndUpdate(
			id,
			{
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
				rate,
				category,
				service,
				keywords,
				phrase,
			},
			{ new: true }
		);

		res.status(200).json(newProvider);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to update a provider.");
	}
};

const deleteProvider = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const existProvider = await userModel.findByIdAndDelete(id);

		if (!existProvider) {
			return res.status(404).json({ error: `The provider with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Provider with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a provider.");
	}
};

const updateRateProvider = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { rate, comment } = req.body;
		const existProvider = await userModel.findById(id);

		if (!existProvider) {
			return res.status(404).json({ error: `The provider with id ${id} doesn't exist.` });
		}

		const newComment = new commentModel({ comment, rate, writtenBy: req.uid });
		// TODO: añadir los comentarios a la BD
		if (!existProvider.rate) {
			existProvider.rate = rate;
		} else {
			const newRate = (existProvider.rate + rate) / 2;
			existProvider.rate = newRate.toFixed(2);
		}
		await newComment.save();
		existProvider.comments.push(newComment);
		await existProvider.save();

		res.status(200).json(existProvider);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a provider.");
	}
};

export { getProvider, getProviders, createProvider, updateProvider, deleteProvider, updateRateProvider };
