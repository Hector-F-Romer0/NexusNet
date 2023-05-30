import React, { useEffect, useState } from "react";
import CardProvider from "./CardProvider";
import { useSelector } from "react-redux";
import { getProvidersNotApprovedRequest, getProvidersRequest } from "../../services/providers.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import Loading from "./Loading";

const ContainerProvider = () => {
	const [providers, setProviders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getDataBD = async () => {
			setIsLoading(true);
			const res = await getProvidersNotApprovedRequest(getUserToken());
			console.log(res);
			setProviders(res);
			setIsLoading(false);
		};

		getDataBD();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="flex flex-col justify-center items-center mb-20">
			{!providers.length > 0 ? (
				<h3 className="text-black ml-5 text-6xl my-64">Not providers found to approve 😀</h3>
			) : (
				providers.map((provider) => {
					return <CardProvider key={provider.id} data={provider} />;
				})
			)}
		</div>
	);
};

export default ContainerProvider;
