import * as jose from "jose";
import { InvalidTokenError } from "./errors";

const verifyJWT = async (token) => {
	try {
		const secret = new TextEncoder().encode(import.meta.env.VITE_SECRET_JWT_SEED);
		const { payload } = await jose.jwtVerify(token, secret);

		if (!payload.uid) {
			throw new InvalidTokenError("Token without uid. Invalid token.");
		}

		if (!payload.role) {
			throw new InvalidTokenError("Token without role. Invalid token.");
		}

		if (!payload.username) {
			throw new InvalidTokenError("Token without username. Invalid token.");
		}

		return payload;
	} catch (error) {
		if (error instanceof InvalidTokenError) {
			return error;
		}
	}
};

export { verifyJWT };
