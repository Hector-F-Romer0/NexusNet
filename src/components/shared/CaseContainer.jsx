import React from "react";
import { CardContainerStyle } from "../../styled-components/index/CardCase.style";
import CardCase from "./CardCase";

const CaseContainer = () => {
	return (
		<CardContainerStyle>
			<CardCase />
			<CardCase />
			<CardCase />
			<CardCase />
		</CardContainerStyle>
	);
};

export default CaseContainer;
