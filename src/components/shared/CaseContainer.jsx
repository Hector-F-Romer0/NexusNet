import React from "react";
import { useSelector } from "react-redux";

import { CardContainerStyle } from "../../styled-components/index/CardCase.style";
import CardCase from "./CardCase";

const CaseContainer = () => {
	const { user } = useSelector((state) => state.user);

	return (
		<CardContainerStyle>
			{user?.cases?.map((caseInformation) => (
				<CardCase data={caseInformation} />
			))}
		</CardContainerStyle>
	);
};

export default CaseContainer;
