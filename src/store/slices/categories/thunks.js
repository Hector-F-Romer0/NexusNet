import { instanceBackend } from "../../../db/config";

import { startLoading, setCategories } from "../categories/categoriesSlice";

const getCategories = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoading());
			const res = await instanceBackend.get("/category");
			dispatch(setCategories(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};

const postCategoryRequest = (data) => {
	return async (dispatch) => {
		try {
			console.log(data);
			const res = await instanceBackend.post("/category", { label: data });
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
};

const putCategoryRequest = (data) => {
	return async (dispatch) => {
		try {
			console.log("LO QUE LLEGA PARA LA REQUEST");
			const res = await instanceBackend.put(`/category/${data.id}`, { label: data.label });
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
};

const deleteCategoryRequest = (id) => {
	return async (dispatch) => {
		try {
			dispatch(startLoading());
			const res = await instanceBackend.delete(`/category/${id}`);
			if (res.status === 204) {
				// La eliminación ocurrió correctamente
				const res = await instanceBackend.get("/category");
				console.log(res);
				dispatch(setCategories(res.data));
			} else {
				console.log("Ocurrió un error al momento de eliminar desde el backend");
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export { getCategories, postCategoryRequest, putCategoryRequest, deleteCategoryRequest };
