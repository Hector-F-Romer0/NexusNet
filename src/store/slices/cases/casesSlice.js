import { createSlice } from "@reduxjs/toolkit";
import casesDB from "../../../db/cases.json";

const initialState = casesDB;

export const casesSlices = createSlice({
	name: "cases",
	initialState,
	reducers: {
		addCase: (state, action) => {
			console.log("Add case");
		},
	},
});

export const { addCase } = casesSlices.actions;
