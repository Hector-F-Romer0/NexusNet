import { generateJWT } from "../helpers/jwt.js";
import bcrypt from "bcrypt";

import { userModel } from "../models/user.model.js";

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

		const token = await generateJWT(user.id, user.username, user.typeUser);

		res.status(200).json({ user, token });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a provider.");
	}
};

export { loginUser };
