import { request, response } from "express";

import categoryModel from "../models/category.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getCategory = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const category = await categoryModel.findById(id).exec();

		if (!category) {
			return res.status(404).json({ error: `The category with id ${id} doesn't exist.` });
		}

		res.status(200).json(category);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the category.`);
	}
};

const getCategories = async (req = request, res = response) => {
	try {
		const categories = await categoryModel.find({});
		res.status(200).json(categories);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the categories.");
	}
};

const createCategory = async (req = request, res = response) => {
	try {
		const { label } = req.body;
		const existLabel = await categoryModel.findOne({ label });
		if (existLabel) {
			return res.status(409).json({ error: `keyword with name ${label} already exist.` });
		}

		const keyword = new categoryModel({ label });
		await keyword.save();
		res.status(201).json(keyword);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a keyword.");
	}
};

const updateCategory = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { label } = req.body;

		const category = await categoryModel.findById(id).exec();

		if (!category) {
			return res.status(404).json({ error: `The category with id ${id} doesn't exist.` });
		}

		const newCategory = await categoryModel.findOneAndUpdate(id, { label }, { new: true });

		res.status(200).json(newCategory);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to update a category.");
	}
};

const deleteCategory = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const existCategory = await categoryModel.findByIdAndDelete(id);
		if (!existCategory) {
			return res.status(404).json({ error: `The category with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Category with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a category.");
	}
};

export { getCategory, getCategories, createCategory, updateCategory, deleteCategory };
