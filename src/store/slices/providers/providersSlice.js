import { createSlice, current } from "@reduxjs/toolkit";
import providersDB from "../../../db/providers.json";

const initialState = {
	providers: providersDB,
	isLoading: false,
};

export const providerSlice = createSlice({
	name: "providers",
	initialState,
	reducers: {
		rateProvider: (state, action) => {
			const { idProvider, rate } = action.payload;
			const updatedProviders = state.providers.map((provider) => {
				if (provider.id === idProvider) {
					let newRate = (provider.rate + rate) / 2;
					provider.rate = newRate.toFixed(1);
				}
				return provider;
			});
			state.providers = updatedProviders;
		},
	},
});

export const { rateProvider } = providerSlice.actions;
