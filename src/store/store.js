import { configureStore } from "@reduxjs/toolkit";
import { casesSlices } from "./slices/cases/casesSlice";

export const store = configureStore({
	reducer: {
		cases: casesSlices.reducer,
	},
});
