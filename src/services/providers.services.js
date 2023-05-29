import { instanceBackend } from "../db/config";

const getProviderIdRequest = async (id,token) => {
	try {
		const res = await instanceBackend.get(`/provider/${id}`,{ headers: { Authorization: `Bearer ${token}` } });
       
		return res.data;
	} catch (error) {
		return error.response;
	}
};

const getProvidersRequest = async (token) => {
	try {
		const res = await instanceBackend.get("/provider",{ headers: { Authorization: `Bearer ${token}` } });
       
		return res.data;
	} catch (error) {
		return error.response;
	}
};

const updateRateRequest = async(id,data,token)=>{
	try {
		const res = await instanceBackend.post(`/provider/rate/${id}`,data,{ headers: { Authorization: `Bearer ${token}` } });

		return res.data;
	} catch (error) {
		return error.response;
	}
}

export {getProviderIdRequest, getProvidersRequest,updateRateRequest };
