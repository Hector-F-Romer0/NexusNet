import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./styled-components/index/index.css";

import "./index.css";

import RoutesManager from "./routes/RoutesManager";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<BrowserRouter>
				<RoutesManager />
			</BrowserRouter>
		</Provider>
	</PersistGate>
);
