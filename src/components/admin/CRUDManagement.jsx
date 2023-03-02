import React from "react";
import { PrimaryButtonStyle } from "../../styled-components/index/index";
import SearchBar from "../shared/SearchBar";
import CRUDTable from "./CRUDTable";

const CRUDManagement = () => {
	return (
		<div>
			<h3>Categories</h3>
			<PrimaryButtonStyle>Hola</PrimaryButtonStyle>
			<SearchBar />
			<CRUDTable />
		</div>
	);
};

export default CRUDManagement;
