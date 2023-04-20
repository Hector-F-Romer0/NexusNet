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
		createCase: (state, action) => {
			state.allCases = [...state.allCases, action.payload];
		},
		setCases: (state, action) => {
			state.allCases = action.payload;
		},
		deleteCase: (state, action) => {
			const allCases = current(state.allCases);
			const filter = allCases.filter((userCase) => {
				return userCase.id !== action.payload.id;
			});
			state.allCases = filter;
		},
		completeCase: (state, action) => {
			// const allCases = current(state.allCases);
			console.log(action.payload);
			const modifiedCases = state.allCases.map((item) => {
				if (item.id === action.payload) {
					item.completed = true;
				}
				return item;
			});
			state.allCases = modifiedCases;
		},
	},
});

export const { createCase, deleteCase, completeCase } = casesSlices.actions;
