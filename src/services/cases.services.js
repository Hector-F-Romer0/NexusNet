import { instanceBackend } from "../db/config";

const postCaseRequest = async (data) => {
	try {
		const res = await instanceBackend.post(`/case`, data);
		console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export { postCaseRequest };
