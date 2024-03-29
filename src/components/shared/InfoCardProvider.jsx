import React from "react";
import { CaseSeparator } from "../../styled-components/index/CardCase.style";
import ContainerTag from "./ContainerTag";
import StarContainer from "./StarContainer";
import { InfoProviderStyle } from "../../styled-components/index/CardProvider.style";

const InfoCardProvider = () => {
	return (
		<InfoProviderStyle>
			<h1>Enrique Manos Cuchillas</h1>
			<CaseSeparator></CaseSeparator>
			<ContainerTag></ContainerTag>
			<StarContainer></StarContainer>
		</InfoProviderStyle>
	);
};

export default InfoCardProvider;
