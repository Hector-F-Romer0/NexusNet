import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	categories: [],
	isLoading: false,
};

export const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
			state.isLoading = false;
		},
		createCategory: (state, action) => {
			const allCategories = current(state.categories);
			state.categories = [action.payload, ...allCategories];
		},
		deleteCategory: (state, action) => {
			console.log(action.payload);
			const allCategories = current(state.categories);
			const filter = allCategories.filter((category) => {
				return category.value !== action.payload;
			});
			state.categories = filter;
		},
		updateCategory: (state, action) => {
			const updatedCategory = { ...action.payload };
			const filteredCategories = state.categories.filter((category) => category.value !== updatedCategory.value);
			const newCategories = [updatedCategory, ...filteredCategories];
			state.categories = newCategories;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
	},
});

export const { setCategories, startLoading, createCategory, deleteCategory, updateCategory } = categoriesSlice.actions;
