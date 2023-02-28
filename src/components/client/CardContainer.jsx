import React from "react";
import { CardContainerStyle } from "../../styled-components/client/ClientCard.style";
import CardClient from "./CardClient";

const CardContainer = () => {
	return (
		<CardContainerStyle>
			<CardClient />
			<CardClient />
			<CardClient />
			<CardClient />
		</CardContainerStyle>
	);
};

export default CardContainer;
