import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import HomeClient from "./pages/client/HomeClient";
import AccountClient from "./pages/client/AccountClient";
import "./styled-components/index/index.css";
import RateProvider from "./pages/client/RateProvider";
import TopProviders from "./pages/shared/TopProviders";
import ViewAccountProvider from "./pages/client/ViewAccountProvider";
import CaseInformation from "./pages/shared/CaseInformation";
import SearchProviders from "./pages/client/SearchProviders";
import ProviderSearchCases from "./pages/provider/ProviderSearchCases";
import CaseForm from "./pages/client/CaseForm";
import Chat from "./pages/shared/Chat";
import ClientRegister from "./pages/client/ClientRegister";
import HomeProvider from "./pages/provider/HomeProvider";
import AccountProvider from "./pages/provider/AccountProvider";
import ProviderRegister from "./pages/provider/ProviderRegister";
import KeyWordsCRUD from "./pages/admin/KeyWordsCRUD";
import SignIn from "./pages/index/SignIn";
import SignUp from "./pages/index/SignUp";
import CategoriesCRUD from "./pages/admin/CategoriesCRUD";
import HomeAdmin from "./pages/admin/HomeAdmin";
import ServicesCRUD from "./pages/admin/ServicesCRUD";
import NotFound from "./pages/index/NotFound";
import ViewAccountProviderAdmin from "./pages/admin/ViewAccountProviderAdmin";

import "./index.css";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />}></Route>
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/register/client" element={<ClientRegister></ClientRegister>}></Route>
					<Route path="/*" element={<NotFound />}></Route>

					{/* Client routes */}

					<Route path="/client/home" element={<HomeClient />}></Route>
					<Route path="/top/providers" element={<TopProviders />}></Route>
					<Route path="/client/chats" element={<Chat />}></Route>
					<Route path="/client/account" element={<AccountClient />}></Route>
					<Route path="/client/case/add" element={<CaseForm />}></Route>
					<Route path="/client/case/:id" element={<CaseInformation />}></Route>
					<Route path="/client/rate/provider/:id" element={<RateProvider />}></Route>
					<Route path="/client/search" element={<SearchProviders />}></Route>
					<Route path="/client/view/provider/:id" element={<ViewAccountProvider />}></Route>

				{/* Provider routes */}
				<Route path="/provider/home" element={<HomeProvider />}></Route>
				<Route path="/provider/chats" element={<Chat />}></Route>
				<Route path="/provider/account" element={<AccountProvider />}></Route>
				<Route path="/provider/case/:id" element={<CaseInformation />}></Route>
				<Route path="/register/provider" element={<ProviderRegister></ProviderRegister>}></Route>
				<Route path="/provider/searchcase" element={<ProviderSearchCases></ProviderSearchCases>}></Route>
				{/* Admin Routes */}
				<Route path="/admin/home" element={<HomeAdmin />}></Route>
				<Route path="/admin/categories" element={<CategoriesCRUD />}></Route>
				<Route path="/admin/keywords" element={<KeyWordsCRUD />}></Route>
				<Route path="/admin/services" element={<ServicesCRUD />}></Route>
				<Route path="/admin/view/provider" element={<ViewAccountProviderAdmin />}></Route>
				{/* </ProtectedRoutes> */}
			</Routes>
		</BrowserRouter>
	</Provider>
);
