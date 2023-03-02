import React from "react";
import ReactDOM from "react-dom/client";
import HomeClient from "./pages/client/HomeClient";
import AccountClient from "./pages/client/AccountClient";
import "./styled-components/index/index.css";
import RateProvider from "./pages/client/RateProvider";
import TopProvidersClient from "./pages/client/TopProvidersClient";
import ViewAccountProvider from "./pages/client/ViewAccountProvider";
import CaseInformation from "./pages/client/CaseInformation";
import SearchProviders from "./pages/client/SearchProviders";
import ClientRegister from "./pages/client/ClientRegister";
import CaseForm from "./pages/client/CaseForm";
import ChatClient from "./pages/client/ChatClient";
import HomeProvider from "./pages/provider/HomeProvider";
import ProviderRegister from "./pages/provider/ProviderRegister";
import AccountProvider from "./pages/provider/AccountProvider";
import TopProvidersProvider from "./pages/provider/TopProvidersProvider";
import ChatProvider from "./pages/provider/ChatProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Client */}
		{/* <HomeClient /> */}
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
		{/* <AccountProvider /> */}
		{/* <TopProvidersProvider /> */}
		<ChatProvider />
	</React.StrictMode>
);
