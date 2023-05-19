import jwt from "jsonwebtoken";
import { response } from "express";

export const validateJWT = (req, res = response, next) => {
	const token = req.headers.authorization.split(" ").pop();
	if (!token) {
		return res.status(401).json({
			ok: false,
			msg: "Doesn't exist token.",
		});
	}

	try {
		const { uid, username, typeUser } = jwt.verify(token, process.env.SECRET_JWT_SEED);
		req.uid = uid;
		req.username = username;
		req.typeUser = typeUser;
	} catch (error) {
		return res.status(401).json({
			ok: false,
			msg: "Invalid token",
		});
	}
	next();
};
