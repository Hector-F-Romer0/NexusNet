import { verifyJWT } from "./jwt";

const clearUserLocalStorage = () => {
	localStorage.setItem("auth-token", JSON.stringify(""));
};

const getUserToken = () => {
	const data = JSON.parse(localStorage.getItem("auth-token"));
	return data;
};

// const getRoleUser = async () => {
// 	const role = JSON.parse(localStorage.getItem("role"));
// 	return role;
// };

const getRoleUser = async () => {
	const token = getUserToken();
	const { role } = await verifyJWT(token);
	return role;
};
export { getRoleUser, clearUserLocalStorage, getUserToken };
