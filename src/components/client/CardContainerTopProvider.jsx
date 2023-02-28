import React from "react";
import { CardContainerStyle } from "../../styled-components/client/ClientCard.style";
import CardTopProvider from "./CardTopProvider";

const CardContainerTopProvider = () => {
	return (
		<CardContainerStyle>
			<CardTopProvider/>
            <CardTopProvider/>
            <CardTopProvider/>
            <CardTopProvider/>
            <CardTopProvider/>
            <CardTopProvider/>
            <CardTopProvider/>
		</CardContainerStyle>
	);
};

export default CardContainerTopProvider;