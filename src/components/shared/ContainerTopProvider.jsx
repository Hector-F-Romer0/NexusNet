import React, { useState } from "react";
import { CardContainerStyle } from "../../styled-components/index/CardCase.style";
import CardTopProvider from "./CardTopProvider";
import providersDB from "../../db/providers.json";
import { Provider } from "react-redux";

const ContainerTopProvider = () => {
	const [providers, setProviders] = useState(providersDB);

	return (
		<CardContainerStyle>
			{providers.map((provider) => (
				<CardTopProvider data={provider} key={provider.id}></CardTopProvider>
			))}
		</CardContainerStyle>
	);
};

export default ContainerTopProvider;
