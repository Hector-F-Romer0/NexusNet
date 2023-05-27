import { instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getRoleRequest = async () => {
	try {
		const res = await instanceBackend.get(`/role/`);
        const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getRoleRequest };