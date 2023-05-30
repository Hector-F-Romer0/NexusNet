import jwt from "jsonwebtoken";

const generateJWT = (uid, username, role) => {
	return new Promise((resolve, reject) => {
		const payload = { uid, username, role };
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

const verifyJWT = (token) => {
	const resVerified = jwt.verify(token, process.env.SECRET_JWT_SEED);
	// TODO: Hacer que estos errores vayan al cliente y no rompan el servidor.
	if (resVerified === null) {
		console.log("Empty token.");
		throw new Error("Empty token.");
	}

	if (resVerified.uid === null) {
		console.log("Token without uid. Invalid token.");
		throw new Error("Token without uid. Invalid token.");
	}

	if (!resVerified.role) {
		console.log("Token without role. Invalid token.");
		throw new Error("Token without role. Invalid token.");
	}

	console.log(resVerified);
	return resVerified;
};

export { generateJWT, verifyJWT };
