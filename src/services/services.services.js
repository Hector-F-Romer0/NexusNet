import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getServiceRequest = async (id) => {
	try {
		const res = await instanceBackend.get(`/service/${id}`,{ headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getServicesRequest = async (token) => {
	try {
		const res = await instanceBackend.get(`/service`,{ headers: { Authorization: `Bearer ${token}` } });
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getServiceRequest, getServicesRequest };
