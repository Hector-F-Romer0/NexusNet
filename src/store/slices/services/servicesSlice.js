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
		createService: (state, action) => {
			const allServices = current(state.services);
			state.services = [action.payload, ...allServices];
		},
		deleteServices: (state, action) => {
			const allServices = current(state.services);
			const filter = allServices.filter((service) => {
				return service.value !== action.payload;
			});
			state.services = filter;
		},
		updateService: (state, action) => {
			const updatedService = { ...action.payload };
			const filteredServices = state.services.filter((service) => service.value !== updatedService.value);
			const newServices = [updatedService, ...filteredServices];
			state.services = newServices;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		endLoading: (state, action) => {
			state.isLoading = false;
		},
	},
});

export const { setServices, startLoading, createService, deleteServices, updateService } = servicesSlice.actions;
