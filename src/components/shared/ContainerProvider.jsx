import React from "react";
import CardProvider from "./CardProvider";
import { useSelector } from "react-redux";

const ContainerProvider = () => {
	const { providers } = useSelector((state) => state.providers);

	return (
		<div className="flex flex-col justify-center items-center mb-20">
			{providers.map((provider) => {
				return <CardProvider key={provider.id} data={provider} />;
			})}
		</div>
	);
};

export default ContainerProvider;
