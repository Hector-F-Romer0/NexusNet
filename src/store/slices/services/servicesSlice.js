import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	services: [],
	isLoading: false,
};

export const servicesSlice = createSlice({
	name: "services",
	initialState,
	reducers: {
		setServices: (state, action) => {
			state.services = action.payload;
			state.isLoading = false;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		endLoading: (state, action) => {
			state.isLoading = false;
		},
	},
});

export const { setServices, startLoading, endLoading } = servicesSlice.actions;
