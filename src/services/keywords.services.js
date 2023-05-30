import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getKeywordRequest = async (id, token) => {
	try {
		const res = await instanceBackend.get(`/keyword/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getKeywordsRequest = async (token) => {
	try {
		const res = await instanceBackend.get(`/keyword`, { headers: { Authorization: `Bearer ${token}` } });
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const postKeywordRequest = async (data, token) => {
	try {
		const res = await instanceBackend.post(`/keyword`, data, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		// return error;
		throw new ExistingValueError("The category already exists in the database.");
	}
};

const putKeywordRequest = async (id, data, token) => {
	try {
		const res = await instanceBackend.put(`/keyword/${id}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
};

const deleteKeywordRequest = async (id, token) => {
	try {
		const res = await instanceBackend.delete(`/keyword/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export { getKeywordRequest, getKeywordsRequest, postKeywordRequest, deleteKeywordRequest, putKeywordRequest };
