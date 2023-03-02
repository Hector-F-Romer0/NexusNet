import React from "react";
import { TagContainerStyle } from "../../styled-components/index/Tags.style";
import Tag from "./Tag";
import CardTopProvider from "./CardTopProvider";
import InfoCase from "./InfoCase";
import { CardInfoCaseStyle } from "../../styled-components/client/CardCase.style";
import CaseUploads from "./CaseUploads";

export const CardInfoCase = () => {
	return (
		<CardInfoCaseStyle>
			<InfoCase></InfoCase>
			<h2>Files uploaded</h2>
			<CaseUploads></CaseUploads>
			<h2>Taken by</h2>
			<CardTopProvider></CardTopProvider>
			<TagContainerStyle>
				<Tag></Tag>
				<Tag></Tag>
				<Tag></Tag>
			</TagContainerStyle>
		</CardInfoCaseStyle>
	);
};
