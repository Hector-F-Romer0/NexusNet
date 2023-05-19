import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getServiceRequest = async (id) => {
	try {
		const res = await instanceBackend.get(`/service/${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getServicesRequest = async () => {
	try {
		const res = await instanceBackend.get(`/service`);
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getServiceRequest, getServicesRequest };
