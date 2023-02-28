import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/client/Home";
import AccountClient from "./pages/client/AccountClient";
import "./styled-components/index/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AccountClient />
	</React.StrictMode>
);
