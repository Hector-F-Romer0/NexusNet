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
		startLoading: (state, action) => {
			state.isLoading = true;
		},
	},
});

export const { setCategories, startLoading } = categoriesSlice.actions;
