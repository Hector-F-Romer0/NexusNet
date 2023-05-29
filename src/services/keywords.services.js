import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getKeywordRequest = async (id,token) => {
	try {
		const res = await instanceBackend.get(`/keyword/${id}`,{ headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getKeywordsRequest = async (token) => {
	try {
		const res = await instanceBackend.get(`/keyword`,{ headers: { Authorization: `Bearer ${token}` } });
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getKeywordRequest, getKeywordsRequest };
