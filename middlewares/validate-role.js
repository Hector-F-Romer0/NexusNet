import { response } from "express";
import { roleModel } from "../models/role.model.js";

const hasRoles = (rolesAllowed) => {
	return async (req, res = response, next) => {
		try {
			const rolesInBD = await roleModel.find({ _id: rolesAllowed }).exec();
			const userRole = req.role;

			if (!userRole) {
				throw new Error("Don't exist role in the request.");
			}

			const isUserAuthorized = rolesInBD.find((role) => role.id === userRole);

			if (!isUserAuthorized) {
				// throw new Error("User don't have authorization.");
				return res.status(401).json({
					error: "User don't have authorization.",
				});
			}

			next();
		} catch (error) {
			console.log(error);
			console.log(typeof error);
			return res.status(403).json({
				ok: false,
				error: error,
			});
		}
	};
};

export { hasRoles };
