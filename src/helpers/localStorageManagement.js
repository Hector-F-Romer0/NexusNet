const getUserLocalStorage = () => {
	const data = JSON.parse(localStorage.getItem("userInfo"));
	return data;
};

const setUserLocalStorage = (data) => {
	localStorage.setItem("userInfo", JSON.stringify(data));
};

const clearUserLocalStorage = () => {
	localStorage.setItem("userInfo", JSON.stringify(""));
};

const getUserToken = () => {
	const data = JSON.parse(localStorage.getItem("auth-token"));
	return data;
};

export { getUserLocalStorage, setUserLocalStorage, clearUserLocalStorage, getUserToken };
