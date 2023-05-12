import { request, response } from "express";

import caseModel from "../models/case.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getCase = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const caseBD = await caseModel.findById(id).exec();

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
		const cases = await caseModel.find({});
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
			category: category.value,
			service: service.value,
			createdAt: Date.now(),
		});
		await newCase.save();
		res.status(201).json(newCase);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a case.");
	}
};

// const updateCase = async (req = request, res = response) => {
// 	try {
// 		const { id } = req.params;
// 		const { label } = req.body;

// 		const category = await caseModel.findById(id).exec();

// 		if (!category) {
// 			return res.status(404).json({ error: `The category with id ${id} doesn't exist.` });
// 		}

// 		const newCategory = await caseModel.findOneAndUpdate(id, { label }, { new: true });

// 		res.status(200).json(newCategory);
// 	} catch (error) {
// 		handleErrorHTTP(res, error, 500, "Error when trying to update a category.");
// 	}
// };

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

export { getCase, getCases, createCase, deleteCase };
