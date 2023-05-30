import { USER_ROLES, instanceBackend } from "../db/config";
import { changeKeysOfArray } from "../helpers/normalizeData";

const getRoleRequest = async () => {
	try {
		const res = await instanceBackend.get(`/role`);
		const data = changeKeysOfArray(res.data, "id", "value");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const getRoleRegisterRequest = async () => {
	try {
		const res = await instanceBackend.get(`/role`);
		const changeLabel = changeKeysOfArray(res.data, "role", "label");
		const changeValue = changeKeysOfArray(changeLabel, "id", "value");
		const roles = changeValue.filter((role) => {
			if (role.value !== USER_ROLES.ADMIN) {
				return role;
			}
		});

		return roles;
	} catch (error) {
		console.log(error);
	}
};

export { getRoleRequest, getRoleRegisterRequest };
