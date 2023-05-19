import { instanceBackend } from "../db/config";

const loginUserRequest = async (data) => {
	try {
		const res = await instanceBackend.post("/auth/login", data);
		// console.log(res);
		return res;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
};

export { loginUserRequest };
