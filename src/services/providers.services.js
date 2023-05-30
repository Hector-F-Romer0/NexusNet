import { instanceBackend } from "../db/config";

const getProviderIdRequest = async (id, token) => {
	try {
		const res = await instanceBackend.get(`/provider/${id}`, { headers: { Authorization: `Bearer ${token}` } });

		return res.data;
	} catch (error) {
		return error.response;
	}
};

const getProvidersRequest = async (token) => {
	try {
		const res = await instanceBackend.get("/provider", { headers: { Authorization: `Bearer ${token}` } });

		return res.data;
	} catch (error) {
		return error.response;
	}
};

const getProvidersApprovedRequest = async (token) => {
	try {
		const res = await instanceBackend.get("/provider/all/approved", {
			headers: { Authorization: `Bearer ${token}` },
		});

		return res.data;
	} catch (error) {
		return error.response;
	}
};

const getProvidersNotApprovedRequest = async (token) => {
	try {
		const res = await instanceBackend.get("/provider/not/approved", {
			headers: { Authorization: `Bearer ${token}` },
		});

		return res.data;
	} catch (error) {
		return error.response;
	}
};

const postProviderRequest = async (data) => {
	try {
		const res = await instanceBackend.post(`/provider`, data);

		return res.data;
	} catch (error) {
		return error.response;
	}
};

const approveProviderRequest = async (id, token) => {
	try {
		const res = await instanceBackend.put(
			`/provider/approve/${id}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);

		return res.data;
	} catch (error) {
		console.log(error);
		return error.response;
	}
};

const disapproveProviderRequest = async (id, token) => {
	try {
		const res = await instanceBackend.put(
			`/provider/disapprove/${id}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);

		return res.data;
	} catch (error) {
		console.log(error);
		return error.response;
	}
};

const updateRateRequest = async (id, data, token) => {
	try {
		const res = await instanceBackend.post(`/provider/rate/${id}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});

		return res.data;
	} catch (error) {
		return error.response;
	}
};

export {
	getProviderIdRequest,
	getProvidersApprovedRequest,
	postProviderRequest,
	getProvidersRequest,
	getProvidersNotApprovedRequest,
	updateRateRequest,
	disapproveProviderRequest,
	approveProviderRequest,
};
