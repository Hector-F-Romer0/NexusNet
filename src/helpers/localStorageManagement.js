import { verifyJWT } from "./jwt";

const clearUserLocalStorage = () => {
	localStorage.setItem("auth-token", JSON.stringify(""));
};

const getUserToken = () => {
	const data = JSON.parse(localStorage.getItem("auth-token"));
	return data;
};

const getRoleUser = async () => {
	const { role } = await verifyJWT(getUserToken());
	return role;
};
export { getRoleUser, clearUserLocalStorage, getUserToken };
