import providersDB from "../../../db/providers.json";
import { setProviders, startLoading } from "./providersSlice";

export const getProviders = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// TODO: hacer la petición al backend
		dispatch(setProviders(providersDB));
	};
};
