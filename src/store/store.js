import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import thunk from "redux-thunk";

import { casesSlices } from "./slices/cases/casesSlice";
import { userSlice } from "./slices/user/userSlice";
import { usersDBlice } from "./slices/usersDB/usersDBSlice";
import { chatSlice } from "./slices/chat/chatSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	user: userSlice.reducer,
	cases: casesSlices.reducer,
	chat: chatSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});
