import { instanceBackend } from "../db/config";


const getProvidersRequest = async (token) => {
	try {
		const res = await instanceBackend.get("/provider",{ headers: { Authorization: `Bearer ${token}` } });
       
		return res.data;
	} catch (error) {
		return error.response;
	}
};

export { getProvidersRequest };
