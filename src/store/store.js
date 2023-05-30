import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import thunk from "redux-thunk";

import { chatSlice } from "./slices/chat/chatSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	chat: chatSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});
