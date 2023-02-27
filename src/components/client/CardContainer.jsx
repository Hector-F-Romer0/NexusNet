import React from "react";
import { CardContainerStyle } from "../../styled-components/index/ClientCard.style";
import CardClient from "./CardClient";

const CardContainer = () => {
	return (
		<CardContainerStyle>
			<CardClient />
			<CardClient />
		</CardContainerStyle>
	);
};

export default CardContainer;
