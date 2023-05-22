import { request, response } from "express";

import { userModel } from "../models/user.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const getUsers = async (req = request, res = response) => {
	try {
		const providers = await userModel.find({});
		res.status(200).json(providers);
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to get all the providers.");
	}
};

export { getUsers };
