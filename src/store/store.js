import { configureStore } from "@reduxjs/toolkit";
import { casesSlices } from "./slices/cases/casesSlice";
import { providerSlice } from "./slices/providers/providersSlice";

export const store = configureStore({
	reducer: {
		cases: casesSlices.reducer,
		providers: providerSlice.reducer,
	},
});
