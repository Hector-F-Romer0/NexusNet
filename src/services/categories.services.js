import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getCategoryRequest = async (id) => {
	try {
		const res = await instanceBackend.get(`/category/${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getCategoriesRequest = async () => {
	try {
		const res = await instanceBackend.get(`/category`);
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getCategoryRequest, getCategoriesRequest };
