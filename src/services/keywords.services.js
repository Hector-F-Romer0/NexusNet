import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getKeywordRequest = async (id) => {
	try {
		const res = await instanceBackend.get(`/keyword/${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getKeywordsRequest = async () => {
	try {
		const res = await instanceBackend.get(`/keyword`);
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getKeywordRequest, getKeywordsRequest };
