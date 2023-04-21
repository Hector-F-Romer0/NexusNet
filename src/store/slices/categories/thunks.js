import categoriesDB from "../../../db/categories.json";
import { startLoading, setCategories } from "../categories/categoriesSlice";

export const getCategories = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// TODO: hacer la petición al backend
		dispatch(setCategories(categoriesDB));
	};
};
