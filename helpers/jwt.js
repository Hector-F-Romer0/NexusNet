import jwt from "jsonwebtoken";

const generateJWT = (uid, username, typeUser) => {
	return new Promise((resolve, reject) => {
		const payload = { uid, username, typeUser };
		jwt.sign(
			payload,
			process.env.SECRET_JWT_SEED,
			{
				expiresIn: "2h",
			},
			(error, token) => {
				if (error) {
					console.log(error);
					reject("Failed to create token.");
				}
				resolve(token);
			}
		);
	});
};

export { generateJWT };
