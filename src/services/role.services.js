import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getRoleRequest = async (token) => {
	try {
		const res = await instanceBackend.get(`/role`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getRoleRequest };
