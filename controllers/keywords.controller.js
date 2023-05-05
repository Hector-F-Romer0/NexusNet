import { request, response } from "express";

import keyWordModel from "../models/keyword.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getKeyWord = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const keyword = await keyWordModel.findById(id).exec();

		if (!keyword) {
			return res.status(404).json({ error: `The keyword with id ${id} doesn't exist.` });
		}

		res.status(200).json(keyword);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the keyword.`);
	}
};

const getKeyWords = async (req = request, res = response) => {
	try {
		const keywords = await keyWordModel.find({});
		res.status(200).json(keywords);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the keywords.");
	}
};

const createKeyWord = async (req = request, res = response) => {
	try {
		const { label } = req.body;
		const existLabel = await keyWordModel.findOne({ label });
		if (existLabel) {
			return res.status(409).json({ error: `keyword with name ${label} already exist.` });
		}

		const keyword = new keyWordModel({ label });
		await keyword.save();
		res.status(201).json(keyword);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a keyword.");
	}
};

const updateKeyWord = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { label } = req.body;

		const keyword = await keyWordModel.findById(id).exec();

		if (!keyword) {
			return res.status(404).json({ error: `The keyword with id ${id} doesn't exist.` });
		}

		const newKeyword = await keyWordModel.findOneAndUpdate(id, { label }, { new: true });

		res.status(200).json(newKeyword);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to update a keyword.");
	}
};

const deleteKeyWord = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const existKeyword = await keyWordModel.findByIdAndDelete(id);
		if (!existKeyword) {
			return res.status(404).json({ error: `The keyword with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Keyword with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a keyword.");
	}
};

export { getKeyWord, getKeyWords, createKeyWord, updateKeyWord, deleteKeyWord };
