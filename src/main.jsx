import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/client/Home";
import AccountClient from "./pages/client/AccountClient";
import "./styled-components/index/index.css";
import RateProvider from "./pages/client/RateProvider";
import TopProviders from "./pages/client/TopProviders";
import ViewAccountProvider from "./pages/client/ViewAccountProvider";
import CaseInformation from "./pages/client/CaseInformation";
import SearchProviders from "./pages/client/SearchProviders";
import ClientRegister from "./pages/client/ClientRegister";
import CaseForm from "./pages/client/CaseForm";
import ChatClient from "./pages/client/ChatClient";
import HomeProvider from "./pages/provider/HomeProvider";
import ProviderRegister from "./pages/provider/ProviderRegister";
import AccountProvider from "./pages/provider/AccountProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Client */}
		{/* <Home /> */}
		{/* <AccountClient /> */}
		{/* <RateProvider /> */}
		{/* <TopProviders /> */}
		{/* <ViewAccountProvider /> */}
		{/* <CaseInformation /> */}
		{/* <SearchProviders /> */}
		{/* <ClientRegister /> */}
		{/* <CaseForm /> */}
		{/* <ChatClient /> */}

		{/* Provider */}
		{/* <HomeProvider /> */}
		{/* <ProviderRegister /> */}
		<AccountProvider />
	</React.StrictMode>
);
