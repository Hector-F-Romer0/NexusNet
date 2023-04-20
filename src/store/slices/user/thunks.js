import usersDB from "../../../db/users.json";
import { setUser } from "./userSlice";

export const getUser = (data) => {
	return async (dispatch) => {
		console.log("EN thunks");
		const findUser = usersDB.find((user) => user.username === data?.username);
		// console.log(findUser);
		// TODO: petición al backend para obtener si el usuario si existe
		dispatch(setUser(findUser));
	};
};
