import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	keywords: [],
	isLoading: false,
};

export const keyWordsSlice = createSlice({
	name: "keywords",
	initialState,
	reducers: {
		setKeyWords: (state, action) => {
			state.categories = action.payload;
			state.isLoading = false;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
	},
});

export const { setKeyWords, startLoading } = keyWordsSlice.actions;
