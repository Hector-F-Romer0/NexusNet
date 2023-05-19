import { request, response } from "express";

import { roleModel } from "../models/role.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getRole = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const role = await roleModel.findById(id).exec();

		if (!role) {
			return res.status(404).json({ error: `The role with id ${id} doesn't exist.` });
		}

		res.status(200).json(role);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the role.`);
	}
};

const getRoles = async (req = request, res = response) => {
	try {
		const roles = await roleModel.find({});
		res.status(200).json(roles);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the services.");
	}
};

const createRole = async (req = request, res = response) => {
	try {
		const { role } = req.body;
		const existRole = await roleModel.findOne({ role });

		if (existRole) {
			return res.status(409).json({ error: `Role with name ${role} already exist.` });
		}

		const newRole = new roleModel({ role });
		await newRole.save();
		res.status(201).json(newRole);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a role.");
	}
};

const updateRole = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { role } = req.body;

		const existRole = await roleModel.findById(id).exec();

		if (!existRole) {
			return res.status(404).json({ error: `The role with id ${id} doesn't exist.` });
		}

		const newRole = await roleModel.findOneAndUpdate(id, { role }, { new: true });

		res.status(200).json(newRole);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to Update a role.");
	}
};

const deleteRole = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const existRole = await roleModel.findByIdAndDelete(id);
		if (!existRole) {
			return res.status(404).json({ error: `The role with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Role with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a role.");
	}
};

export { getRole, getRoles, createRole, updateRole, deleteRole };
