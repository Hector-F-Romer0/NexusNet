import { createSlice, current } from "@reduxjs/toolkit";
import providersDB from "../../../db/providers.json";
import { setUserLocalStorage } from "../../../helpers/localStorageManagement";

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
		addProvider: (state, action) => {
			const providers = current(state.providers);
			const newProviderAdded = [...providers, action.payload];
			state.providers = newProviderAdded;
		},
		setProviders: (state, action) => {
			state.providers = action.payload;
			state.isLoading = false;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		assignCaseProvider: (state, action) => {
			const { userCase, provider } = action.payload;
			const copyCase = { ...userCase };
			const copyProvider = { ...provider };

			const oldCases = copyProvider.cases;
			copyProvider.cases = [copyCase, ...oldCases];

			const filterProvider = current(state.providers).filter((item) => item.id !== provider.id);
			const updatedProviders = [...filterProvider, copyProvider];
			setUserLocalStorage(copyProvider);
			state.providers = updatedProviders;
		},
		deleteProvider: (state, action) => {
			const provider = action.payload;
			const filter = state.providers.filter((prv) => {
				return prv.id !== provider.id;
			});
			state.providers = filter;
		},
	},
});

export const { rateProvider, addProvider, setProviders, startLoading, assignCaseProvider, deleteProvider } =
	providerSlice.actions;
