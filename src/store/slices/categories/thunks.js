import categoriesDB from "../../../db/cases.json";
import { startLoading, setCategories } from "../categories/categoriesSlice";

export const getServices = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// TODO: hacer la petición al backend
		dispatch(setCategories(categoriesDB));
	};
};
