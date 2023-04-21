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
			state.keywords = action.payload;
			state.isLoading = false;
		},
		createKeyword: (state, action) =>{
			const allKeywords = current(state.keywords)
			state.keywords = [action.payload, ...allKeywords]
		},
		deleteKeyword: (state, action) => {
			const allKeywords = current(state.keywords);
			const filter = allKeywords.filter((keyword) => {
				return keyword.value !== action.payload;
			});
			state.keywords = filter;
		},
		updateKeyword: (state, action) => {
			const updatedKeyword = { ...action.payload };
			const filteredKeywords = state.keywords.filter((keyword) => keyword.value !== updatedKeyword.value);
			const newKeywords = [updatedKeyword, ...filteredKeywords];
			state.keywords = newKeywords;
		  },
		startLoading: (state, action) => {
			state.isLoading = true;
		},
	},
});

export const { setKeyWords, startLoading, createKeyword, deleteKeyword, updateKeyword } = keyWordsSlice.actions;
