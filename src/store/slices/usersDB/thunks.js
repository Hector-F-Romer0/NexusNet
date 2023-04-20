import { addUserDB, setUsersDB, startLoading } from "./usersDBSlice";
import usersDB from "../../../db/users.json";
import { getUser } from "../user/thunks";

export const getUsersDB = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// TODO: PETICIÓN A LA DB
		dispatch(setUsersDB(usersDB));
	};
};

export const postUserDB = (newUser) => {
	return async (dispatch) => {
		dispatch(startLoading());

		//TODO: Realizar llamado al backend para crear usuario
		// newUser.id = Date.now();
		// console.log("En thunk post");
		// console.log(newUser);
		dispatch(addUserDB(newUser));
		// dispatch(getUser(newUser));
	};
};
