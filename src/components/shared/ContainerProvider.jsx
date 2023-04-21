import React from "react";
import CardProvider from "./CardProvider";
import { useSelector } from "react-redux";

const ContainerProvider = () => {
	const { providers } = useSelector((state) => state.providers);

	return (
		<div className="flex flex-col justify-center items-center mb-20">
			{!providers.length > 0 ? (
				<h3 className="text-black ml-5 text-2xl my-4">Not providers found to approve 😀</h3>
			) : (
				providers.map((provider) => {
					return <CardProvider key={provider.id} data={provider} />;
				})
			)}
		</div>
	);
};

export default ContainerProvider;
