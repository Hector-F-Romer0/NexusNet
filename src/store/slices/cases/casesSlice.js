import { createSlice, current } from "@reduxjs/toolkit";
import casesDB from "../../../db/cases.json";

const initialState = {
	allCases: casesDB,
	isLoading: false,
};

export const casesSlices = createSlice({
	name: "cases",
	initialState,
	reducers: {
		addCase: (state, action) => {
			console.log("Add case");
		},
		deleteCase: (state, action) => {
			const allCases = current(state.allCases);
			const filter = allCases.filter((userCase) => {
				return userCase.id !== action.payload.id;
			});
			state.allCases = filter;
		},
	},
});

export const { addCase, deleteCase } = casesSlices.actions;
