import { generateJWT, verifyJWT } from "../helpers/jwt.js";
import bcrypt from "bcrypt";

import { userModel } from "../models/user.model.js";
import { handleErrorHTTP } from "../helpers/handleError.js";

const loginUser = async (req = request, res = response) => {
	try {
		const { username, password } = req.body;

		const user = await userModel.findOne({ username }).populate("role").exec();
		if (!user) {
			return res.status(404).json({ msg: `The user ${username} doesn't exist. Please try it again.` });
		}

		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			return res.status(404).json({ msg: "Incorrect password. Please try it again." });
		}
		// console.log(user.role._id);

		// TODO: Cambiar _id a id cuando pueda moficiar el modelo de rol
		const token = await generateJWT(user.id, user.username, user.role._id);

		res.status(200).json({ user, token });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a provider.");
	}
};

const loginGoogle = async (req = request, res = response) => {
	// console.log(req.user);
	res.send("Iniciada sesión");
};

const revalidateToken = async (req = request, res = response) => {
	try {
		const uid = req.uid;
		const username = req.username;
		const role = req.role;

		if (!req.uid || !req.username || !req.role) {
			throw new Error("Don't exists user data in the request.");
		}

		const token = await generateJWT(uid, username, role);
		res.status(200).json({ token });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to renew the token.");
	}
};

export { loginUser, loginGoogle, revalidateToken };
