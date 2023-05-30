import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getServiceRequest = async (id) => {
	try {
		const res = await instanceBackend.get(`/service/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getServicesRequest = async (token) => {
	try {
		const res = await instanceBackend.get(`/service`, { headers: { Authorization: `Bearer ${token}` } });
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const postServiceRequest = async (data, token) => {
	try {
		const res = await instanceBackend.post(`/service`, data, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		// return error;
		throw new ExistingValueError("The category already exists in the database.");
	}
};

const putServiceRequest = async (id, data, token) => {
	try {
		const res = await instanceBackend.put(`/service/${id}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
};

const deleteServiceRequest = async (id, token) => {
	try {
		const res = await instanceBackend.delete(`/service/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export { getServiceRequest, getServicesRequest, postServiceRequest, deleteServiceRequest, putServiceRequest };
