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
		setProviders: (state, action) => {
			state.providers = action.payload;
			state.isLoading = false;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		deleteProvider: (state, action) => {
			const provider = action.payload
			const filter = state.providers.filter((prv) => {
				return prv.id !== provider.id
			})
			state.providers = filter
		}
	},
});

export const { rateProvider , setProviders, startLoading, deleteProvider} = providerSlice.actions;
