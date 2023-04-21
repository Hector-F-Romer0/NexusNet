import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import thunk from "redux-thunk";

import { casesSlices } from "./slices/cases/casesSlice";
import { providerSlice } from "./slices/providers/providersSlice";
import { userSlice } from "./slices/user/userSlice";
import { servicesSlice } from "./slices/services/servicesSlice";
import { categoriesSlice } from "./slices/categories/categoriesSlice";
import { keyWordsSlice } from "./slices/keywords/keywordsSlice";
import { usersDBlice } from "./slices/usersDB/usersDBSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	user: userSlice.reducer,
	cases: casesSlices.reducer,
	providers: providerSlice.reducer,
	services: servicesSlice.reducer,
	categories: categoriesSlice.reducer,
	keywords: keyWordsSlice.reducer,
	usersDB: usersDBlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});
