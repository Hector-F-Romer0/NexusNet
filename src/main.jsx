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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <Home /> */}
		{/* <AccountClient /> */}
		{/* <RateProvider /> */}
		{/* <TopProviders /> */}
		{/* <ViewAccountProvider /> */}
		{/* <CaseInformation /> */}
		<SearchProviders />
	</React.StrictMode>
);
