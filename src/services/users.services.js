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

const loginGoogleRequest = async (data) => {
	try {
		const res = await instanceBackend.post("/user/search/email", data);
		// console.log(res);
		return res;
	} catch (error) {
		// console.log(error);
		throw new Error("User don't exist");
		return error.response;
	}
};

const getUsersRequest = async () => {
	try {
		const res = await instanceBackend.get("/user");
		return res;
	} catch (error) {
		return error.response;
	}
};

const getUserIdRequest = async (id) => {
	try {
		const res = await instanceBackend.get(`/user/${id}`);
		return res.data;
	} catch (error) {
		return error.response;
	}
};

const getUsersWithoutMeRequest = async (token) => {
	try {
		const res = await instanceBackend.get("/user/search/withoutme", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res;
	} catch (error) {
		return error.response;
	}
};

const getExisteUserEmailRequest = async (data) => {
	try {
		const res = await instanceBackend.post("/user/search/exist", data);
		return res;
	} catch (error) {
		throw new Error("User already exist.");
		return error.response;
	}
};

const postUserRequest = async (data) => {
	try {
		const res = await instanceBackend.post(`/client`, data);
		console.log(res);
		return res.data;
	} catch (error) {
		return error
	}
};

export {
	loginUserRequest,
	getUsersRequest,
	getUsersWithoutMeRequest,
	getUserIdRequest,
	postUserRequest,
	loginGoogleRequest,
	getExisteUserEmailRequest,
};
