import React from "react";
import CardTopProvider from "./CardTopProvider";
import InfoCase from "./InfoCase";
import { CardInfoCaseStyle } from "../../styled-components/index/CardCase.style";
import CaseUploads from "./CaseUploads";
import ContainerTagKeywords from "./ContainerTagKeywords";

export const CardInfoCase = () => {
	return (
		<CardInfoCaseStyle>
			<InfoCase></InfoCase>
			<h2>Files uploaded</h2>
			<CaseUploads></CaseUploads>
			<h2>Taken by</h2>
			<CardTopProvider></CardTopProvider>
			<ContainerTagKeywords></ContainerTagKeywords>
		</CardInfoCaseStyle>
	);
};
