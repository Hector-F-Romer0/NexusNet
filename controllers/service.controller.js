import { request, response } from "express";

import serviceModel from "../models/service.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getService = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const service = await serviceModel.findById(id).exec();

		if (!service) {
			res.status(404).json({ error: `The service with id ${id} doesn't exist.` });
		}

		res.status(200).json(service);
	} catch (error) {
		handleErrorHTTP(res, error, 500, `Error when trying to get the serivce whit id ${id}.`);
	}
};

const getServices = async (req = request, res = response) => {
	try {
		const services = await serviceModel.find({});
		res.status(200).json(services);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the services.");
	}
};

const createService = async (req = request, res = response) => {
	try {
		const { label } = req.body;
		const existLabel = await serviceModel.findOne({ label });
		if (existLabel) {
			return res.status(409).json({ error: `Service with name ${label} already exist.` });
		}

		const service = new serviceModel({ label });
		await service.save();
		res.status(201).json(service);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a service.");
	}
};

const updateService = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		const { label } = req.body;

		const service = await serviceModel.findById(id).exec();

		if (!service) {
			return res.status(404).json({ error: `The service with id ${id} doesn't exist.` });
		}

		const newService = await serviceModel.findOneAndUpdate(id, { label }, { new: true });

		res.status(200).json(newService);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to Update a service.");
	}
};

const deleteService = async (req = request, res = response) => {
	try {
		const { id } = req.params;

		const existUser = await serviceModel.findByIdAndDelete(id);
		if (!existUser) {
			return res.status(404).json({ error: `The service with id ${id} doesn't exist.` });
		}
		res.status(204).json({ msg: `Service with id ${id} deleted successfully.` });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to delete a service.");
	}
};

export { getService, getServices, createService, updateService, deleteService };
