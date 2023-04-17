import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store";

import HomeClient from "./pages/client/HomeClient";
import AccountClient from "./pages/client/AccountClient";
import "./styled-components/index/index.css";
import RateProvider from "./pages/client/RateProvider";
import TopProviders from "./pages/shared/TopProviders";
import ViewAccountProvider from "./pages/client/ViewAccountProvider";
import CaseInformationClient from "./pages/client/CaseInformationClient";
import SearchProviders from "./pages/client/SearchProviders";
import CaseForm from "./pages/client/CaseForm";
import ChatClient from "./pages/client/ChatClient";
import HomeProvider from "./pages/provider/HomeProvider";
import AccountProvider from "./pages/provider/AccountProvider";
import ChatProvider from "./pages/provider/ChatProvider";
import CaseInformationProvider from "./pages/provider/CaseInformationProvider";
import KeyWordsCRUD from "./pages/admin/KeyWordsCRUD";
import SignIn from "./pages/index/SignIn";
import SignUp from "./pages/index/SignUp";
import CategoriesCRUD from "./pages/admin/CategoriesCRUD";
import HomeAdmin from "./pages/admin/HomeAdmin";
import ServicesCRUD from "./pages/admin/ServicesCRUD";
import NotFound from "./pages/index/NotFound";
import ViewAccountProviderAdmin from "./pages/admin/ViewAccountProviderAdmin";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />}></Route>
				{/* Client routes */}
				<Route path="/client/home" element={<HomeClient />}></Route>
				<Route path="/top/providers" element={<TopProviders />}></Route>
				<Route path="/client/chats" element={<ChatClient />}></Route>
				<Route path="/client/account" element={<AccountClient />}></Route>
				<Route path="/client/case/add" element={<CaseForm />}></Route>
				<Route path="/client/case/:id" element={<CaseInformationClient />}></Route>
				<Route path="/client/rate/provider/:id" element={<RateProvider />}></Route>
				<Route path="/client/search" element={<SearchProviders />}></Route>
				<Route path="/client/view/provider/:id" element={<ViewAccountProvider />}></Route>
				{/* PENDIENTE UBICAR ClientRegister */}
				{/* Provider routes */}
				<Route path="/provider/home" element={<HomeProvider />}></Route>
				<Route path="/provider/chat" element={<ChatProvider />}></Route>
				<Route path="/provider/account" element={<AccountProvider />}></Route>
				<Route path="/provider/case/:id" element={<CaseInformationProvider />}></Route>
				{/* PENDIENTE UBICAR providerRegister */}
				{/* Admin Routes */}
				<Route path="/admin/home" element={<HomeAdmin />}></Route>
				<Route path="/admin/categories" element={<CategoriesCRUD />}></Route>
				<Route path="/admin/keywords" element={<KeyWordsCRUD />}></Route>
				<Route path="/admin/services" element={<ServicesCRUD />}></Route>
				<Route path="/admin/view/provider" element={<ViewAccountProviderAdmin />}></Route>
				<Route path="/signin" element={<SignIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/*" element={<NotFound />}></Route>
				{/* <Route path="/client/chats" element={<ChatClient />}></Route> */}
			</Routes>
		</BrowserRouter>
	</Provider>
);
