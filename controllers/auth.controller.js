import { generateJWT } from "../helpers/jwt.js";
import clientModel from "../models/client.model.js";
import bcrypt from "bcrypt";

const loginUser = async (req = request, res = response) => {
	try {
		const { username, password } = req.body;

		const user = await clientModel.findOne({ username }).exec();
		if (!user) {
			return res.status(404).json({ msg: "User doesn't exist." });
		}

		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			return res.status(404).json({ msg: "Incorrect password." });
		}

		const token = await generateJWT(user.id, user.username, user.typeUser);

		res.status(200).json({ user, token });
	} catch (error) {
		handleErrorHTTP(res, error, 500, "Error when trying to create a provider.");
	}
};

export { loginUser };
