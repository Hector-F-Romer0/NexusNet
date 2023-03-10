import React from "react";
import ReactDOM from "react-dom/client";
import HomeClient from "./pages/client/HomeClient";
import AccountClient from "./pages/client/AccountClient";
import "./styled-components/index/index.css";
import RateProvider from "./pages/client/RateProvider";
import TopProvidersClient from "./pages/client/TopProvidersClient";
import ViewAccountProvider from "./pages/client/ViewAccountProvider";
import CaseInformationClient from "./pages/client/CaseInformationClient";
import SearchProviders from "./pages/client/SearchProviders";
import ClientRegister from "./pages/client/ClientRegister";
import CaseForm from "./pages/client/CaseForm";
import ChatClient from "./pages/client/ChatClient";
import HomeProvider from "./pages/provider/HomeProvider";
import ProviderRegister from "./pages/provider/ProviderRegister";
import AccountProvider from "./pages/provider/AccountProvider";
import TopProvidersProvider from "./pages/provider/TopProvidersProvider";
import ChatProvider from "./pages/provider/ChatProvider";
import CaseInformationProvider from "./pages/provider/CaseInformationProvider";
import KeyWordsCRUD from "./pages/admin/KeyWordsCRUD";
import SignIn from "./pages/index/SignIn";
import SignUp from "./pages/index/SignUp";
import CategoriesCRUD from "./pages/admin/CategoriesCRUD";
import HomeAdmin from "./pages/admin/HomeAdmin";
import ServicesCRUD from "./pages/admin/ServicesCRUD";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Index */}
		{/* <SignIn /> */}
		{/* <SignUp /> */}

		{/* Client */}
		<HomeClient />
		{/* <AccountClient /> */}
		{/* <RateProvider /> */}
		{/* <TopProvidersClient /> */}
		{/* <ViewAccountProvider /> */}
		{/* <CaseInformationClient /> */}
		{/* <SearchProviders /> */}
		{/* <ClientRegister /> */}
		{/* <CaseForm /> */}
		{/* <ChatClient /> */}

		{/* Provider */}
		{/* <HomeProvider /> */}
		{/* <ProviderRegister /> */}
		{/* <AccountProvider /> */}
		{/* <TopProvidersProvider /> */}
		{/* <ChatProvider /> */}
		{/* <CaseInformationProvider /> */}

		{/* Admin pages */}
		{/* <HomeAdmin /> */}
		{/* <ViewAccountProvider /> */}
		{/* <CategoriesCRUD /> */}
		{/* <ServicesCRUD /> */}
		{/* <KeyWordsCRUD /> */}
	</React.StrictMode>
);
