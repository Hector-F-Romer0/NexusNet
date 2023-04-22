import React from "react";
import { useSelector } from "react-redux";

import { CardContainerStyle } from "../../styled-components/index/CardCase.style";
import CardCase from "./CardCase";
import { getUserLocalStorage } from "../../helpers/localStorageManagement";

const CaseContainer = () => {
	const { user } = useSelector((state) => state.user);

	console.log(user);
	return (
		<CardContainerStyle>
			{getUserLocalStorage()?.cases?.map((caseInformation) => (
				<CardCase key={caseInformation.id} data={caseInformation} />
			))}
		</CardContainerStyle>
	);
};

export default CaseContainer;
