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
		createService: (state, action) =>{
			const allServices = current(state.services)
			state.services = [action.payload, ...allServices]
		},
		deleteServices: (state, action) => {
			const allServices = current(state.services);
			const filter = allServices.filter((service) => {
				return service.id !== action.payload;
			});
			state.services = filter;
		},
		updateService: (state, action) => {
			const updatedService = { ...action.payload };
			const filteredServices = state.services.filter(
			  (service) => service.id !== updatedService.id
			);
			const newServices = [updatedService, ...filteredServices];
			state.services = newServices;
		  },
		startLoading: (state, action) => {
			state.isLoading = true;
		},
	},
});

export const { setServices, startLoading, createService, deleteServices, updateService } = servicesSlice.actions;
