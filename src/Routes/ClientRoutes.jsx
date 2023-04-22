import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./ProtectedRoutes";
import HomeClient from "../pages/client/HomeClient";
import TopProviders from "../pages/shared/TopProviders";
import Chat from "../pages/shared/Chat";
import AccountClient from "../pages/client/AccountClient";
import CaseForm from "../pages/client/CaseForm";
import CaseInformation from "../pages/shared/CaseInformation";
import RateProvider from "../pages/client/RateProvider";
import SearchProviders from "../pages/client/SearchProviders";
import ViewAccountProvider from "../pages/client/ViewAccountProvider";

const ClientRoutes = () => {
	return (
		// <>
		// 	<Route path="home" element={<HomeClient />}></Route>
		// 	{/* <Route path="/top/providers" element={<TopProviders />}></Route> */}
		// 	<Route path="chats" element={<Chat />}></Route>
		// 	<Route path="account" element={<AccountClient />}></Route>
		// 	<Route path="case/add" element={<CaseForm />}></Route>
		// 	<Route path="case/:id" element={<CaseInformation />}></Route>
		// 	<Route path="rate/provider/:id" element={<RateProvider />}></Route>
		// 	<Route path="search" element={<SearchProviders />}></Route>
		// 	<Route path="view/provider/:id" element={<ViewAccountProvider />}></Route>
		// </>

		<Routes>
			<Route path="home" element={<HomeClient />}></Route>
			<Route path="/top/providers" element={<TopProviders />}></Route>
			<Route path="chats" element={<Chat />}></Route>
			<Route path="account" element={<AccountClient />}></Route>
			<Route path="case/add" element={<CaseForm />}></Route>
			<Route path="case/:id" element={<CaseInformation />}></Route>
			<Route path="rate/provider/:id" element={<RateProvider />}></Route>
			<Route path="search" element={<SearchProviders />}></Route>
			<Route path="view/provider/:id" element={<ViewAccountProvider />}></Route>
		</Routes>

		// -------------------------------
		// -------------------------------
		// -------------------------------
		// -------------------------------

		// <Routes>
		// 	<Route path="/client*" element={<ProtectedRoutes allowedFor={"client"} />}>
		// 		<Route path="home" element={<HomeClient />}></Route>
		// 		<Route path="/top/providers" element={<TopProviders />}></Route>
		// 		<Route path="chats" element={<Chat />}></Route>
		// 		<Route path="account" element={<AccountClient />}></Route>
		// 		<Route path="case/add" element={<CaseForm />}></Route>
		// 		<Route path="case/:id" element={<CaseInformation />}></Route>
		// 		<Route path="rate/provider/:id" element={<RateProvider />}></Route>
		// 		<Route path="search" element={<SearchProviders />}></Route>
		// 		<Route path="view/provider/:id" element={<ViewAccountProvider />}></Route>
		// 	</Route>
		// </Routes>
	);
};

export { ClientRoutes };
