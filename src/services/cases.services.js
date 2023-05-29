import { instanceBackend } from "../db/config";

const getCasesRequest = async(token)=>{
	try {
		const res = await instanceBackend.get(`/case`,{ headers: { Authorization: `Bearer ${token}` } } );
		console.log(res)
		return res.data
	} catch (error) {
		return error.response;
	}
}

const getMyCasesRequest = async(token)=>{
	try {
		const res = await instanceBackend.get(`/case/search/mycases`,{ headers: { Authorization: `Bearer ${token}` } } );
		return res.data
	} catch (error) {
		return error.response;
	}
}

const getCaseIdRequest = async(id,token)=>{
	try {
		const res = await instanceBackend.get(`/case/${id}`,{ headers: { Authorization: `Bearer ${token}` } } );
		return res.data
	} catch (error) {
		return error.response;
	}
}

const postCaseRequest = async (data,token) => {
	try {
		const res = await instanceBackend.post(`/case`, data,{ headers: { Authorization: `Bearer ${token}` } });
		console.log(res);
		return res.data;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
};

const deleteCaseRequest = async(id,token)=>
{
	try {
		const res = await instanceBackend.delete(`/case/${id}`,{
			headers: { Authorization: `Bearer ${token}` },
		});
		console.log(res);
		return res.data;
	} catch (error) {
		// console.log(error);
		return error.response;
	}
}

export {getCasesRequest,getMyCasesRequest,getCaseIdRequest, postCaseRequest,deleteCaseRequest };
