import React from "react";
import CardProvider from "./CardProvider";

const ContainerProvider = () => {
	return (
		<div>
			<CardProvider />
			<CardProvider />
			<CardProvider />
		</div>
	);
};

export default ContainerProvider;
