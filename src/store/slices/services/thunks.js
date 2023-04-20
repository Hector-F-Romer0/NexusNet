import servicesDB from "../../../db/services.json";
import { setServices, startLoading } from "./servicesSlice";

export const getServices = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// TODO: hacer la petición al backend
		dispatch(setServices(servicesDB));
	};
};
