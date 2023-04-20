import { setUser } from "./userSlice";

export const getUser = (data) => {
	return async (dispatch) => {
		// const findUser = allUsers.find((user) => user.username === data?.username);
		// console.log(findUser);
		console.log("HOLA");
		// TODO: petición al backend para obtener si el usuario si existe
		// dispatch(setUser(findUser));
	};
};
