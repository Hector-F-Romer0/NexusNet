import { configureStore } from "@reduxjs/toolkit";
import { casesSlices } from "./slices/cases/casesSlice";
import { providerSlice } from "./slices/providers/providersSlice";
import { userSlice } from "./slices/user/userSlice";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		cases: casesSlices.reducer,
		providers: providerSlice.reducer,
	},
});
