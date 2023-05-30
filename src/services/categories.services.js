import { instanceBackend } from "../db/config";
import { ExistingValueError } from "../helpers/errors";
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
		// return error;
		throw new ExistingValueError("The category already exists in the database.");
	}
};

const putCategoryRequest = async (id, data, token) => {
	try {
		const res = await instanceBackend.put(`/category/${id}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
};

const deleteCategoryRequest = async (id, token) => {
	try {
		const res = await instanceBackend.delete(`/category/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export { getCategoryRequest, getCategoriesRequest, postCategoryRequest, putCategoryRequest, deleteCategoryRequest };
