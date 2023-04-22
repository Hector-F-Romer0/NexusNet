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
		assingCase: (state, action) => {
			// ! Debería almacenar únicamente el id del provider, pero en este caso guardamos toda la infor del provedor por persitencia
			const { idCase, provider } = action.payload;
			console.log(idCase);
			console.log(provider);
			// const currentCases = current(state.allCases);
			const modifiedCases = state.allCases.map((item) => {
				console.log(item);
				if (item.id === idCase) {
					console.log("Le atinó");
					item.takenBy = provider;
				}
				return item;
			});
			state.allCases = modifiedCases;
		},
	},
});

export const { createCase, deleteCase, assingCase, completeCase } = casesSlices.actions;
