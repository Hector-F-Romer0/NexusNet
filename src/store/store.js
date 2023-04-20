import { configureStore } from "@reduxjs/toolkit";
import { casesSlices } from "./slices/cases/casesSlice";
import { providerSlice } from "./slices/providers/providersSlice";
import { userSlice } from "./slices/user/userSlice";
import { servicesSlice } from "./slices/services/servicesSlice";
import { categoriesSlice } from "./slices/categories/categoriesSlice";
import { keyWordsSlice } from "./slices/keywords/keywordsSlice";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		cases: casesSlices.reducer,
		providers: providerSlice.reducer,
		services: servicesSlice.reducer,
		categories: categoriesSlice.reducer,
		keywords: keyWordsSlice.reducer,
	},
});
