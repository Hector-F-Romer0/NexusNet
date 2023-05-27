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
		return res;
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

export { loginUserRequest, getUsersRequest, getUsersWithoutMeRequest, getUserIdRequest };
const postUserRequest = async (data) => {
	try {
		const res = await instanceBackend.post(`/client/`, data);
		console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export { loginUserRequest, postUserRequest };
