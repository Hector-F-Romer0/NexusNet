import { request, response } from "express";

import caseModel from "../models/case.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";
import { userModel } from "../models/user.model.js";
import { serviceModel } from "../models/service.model.js";
import { keyWordModel } from "../models/keyword.model.js";

const getCase = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const caseBD = await caseModel
			.findById(id)
			.populate([
				{
					path: "takenBy",
					select: "names lastnames username",
				},
				{
					path: "keywords",
				},
				{
					path: "category",
				},
				{
					path: "service",
				},
			])
			.exec();

		if (!caseBD) {
			return res.status(404).json({ error: `The case with id ${id} doesn't exist.` });
		}

		res.status(200).json(caseBD);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the case.`);
	}
};

const getCases = async (req = request, res = response) => {
	try {
		const cases = await caseModel
			.find({})
			.populate([
				{
					path: "takenBy",
					select: "names lastnames username",
				},
				{
					path: "keywords",
				},
				{
					path: "category",
				},
				{
					path: "service",
				},
			])
			.exec();
		res.status(200).json(cases);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the cases.");
	}
};

const createCase = async (req = request, res = response) => {
	try {
		const { caseTitle, caseDescription, createdBy, keywords, category, service, files } = req.body;
		// console.log(category);
		// console.log(keywords);
		const newCase = new caseModel({
			caseTitle,
			caseDescription,
			createdBy,
			keywords,
			category,
			service,
		});
		await newCase.save();
		res.status(201).json(newCase);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a case.");
	}
};

const updateCase = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { caseTitle, caseDescription, takenOn, takenBy, completed, keywords, category, service, files } =
			req.body;

		const existProvider = await userModel.findOne({ id: takenBy }).exec();
		// if (!existProvider) {
		// 	return res.status(404).json({ error: `Provider with id ${takenBy} doesn't exist.` });
		// }

		const existCategory = await caseModel.findById(category).exec();

		// if (!existCategory) {
		// 	return res.status(404).json({ error: `The category with id ${category} doesn't exist.` });
		// }

		const existService = await serviceModel.findById(service).exec();

		// if (!existService) {
		// 	return res.status(404).json({ error: `The service with id ${category} doesn't exist.` });
		// }

		const existKeywords = await keyWordModel.find({ id: keywords }).exec();

		// if (!existKeywords) {
		// 	return res.status(404).json({ error: `The service with id ${category} doesn't exist.` });
		// }
		const updatedCase = await caseModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
		// console.log(updateCase);
		// const updatedCase = await caseModel.findOneAndUpdate(
		// 	id,
		// 	{ caseTitle, caseDescription, takenOn, takenBy, completed, keywords, category, service, files },
		// 	{ new: true }
		// );

		res.status(200).json(updatedCase);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to update a case.");
	}
};

const deleteCase = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const existCase = await caseModel.findByIdAndDelete(id);
		if (!existCase) {
			return res.status(404).json({ error: `The case with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Case with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a case.");
	}
};

export { getCase, getCases, createCase, updateCase, deleteCase };
