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
export { getUserLocalStorage, setUserLocalStorage, clearUserLocalStorage };
