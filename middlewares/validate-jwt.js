import { response } from "express";
import { verifyJWT } from "../helpers/jwt.js";

export const validateJWT = (req, res = response, next) => {
	try {
		const token = req.headers.authorization.split(" ").pop();
		// console.log(token);
		if (!token) {
			return res.status(401).json({
				ok: false,
				msg: "Doesn't exist token.",
			});
		}

		const { uid, username, role } = verifyJWT(token);
		req.uid = uid;
		req.username = username;
		req.role = role;
	} catch (error) {
		return res.status(401).json({
			ok: false,
			msg: "Invalid token",
		});
	}
	next();
};