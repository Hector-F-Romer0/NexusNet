import React from "react";
import { CardContainerStyle } from "../../styled-components/client/CardCase.style";
import CardTopProvider from "./CardTopProvider";

const ContainerTopProvider = () => {
	return (
		<CardContainerStyle>
			<CardTopProvider />
			<CardTopProvider />
			<CardTopProvider />
			<CardTopProvider />
			<CardTopProvider />
			<CardTopProvider />
			<CardTopProvider />
		</CardContainerStyle>
	);
};

export default ContainerTopProvider;
