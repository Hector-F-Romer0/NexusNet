import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getCategoryRequest = async (id, token) => {
	try {
		const res = await instanceBackend.get(`/category/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getCategoriesRequest = async (token) => {
	try {
		const res = await instanceBackend.get(`/category`, { headers: { Authorization: `Bearer ${token}` } });
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const postCategoryRequest = async (data, token) => {
	try {
		const res = await instanceBackend.post(`/category`, data, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
};

export { getCategoryRequest, getCategoriesRequest, postCategoryRequest };
