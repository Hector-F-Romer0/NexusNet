import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import CardTopProvider from "../../components/shared/CardTopProvider";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";
import { getProvidersRequest } from "../../services/providers.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import Loading from "../../components/shared/Loading";

const TopProviders = () => {
	const [providers, setProviders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getProvidersBD = async () => {
			setIsLoading(true);
			const res = await getProvidersRequest(getUserToken());
			setProviders(res);
			setIsLoading(false);
		};
		getProvidersBD();
	}, []);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className=" text-gray-900 font-semibold h-full mb-20">
				<h1 className="text-4xl font-bold text-center mt-9">Top providers</h1>
				<div className="flex flex-col items-center justify-center flex-wrap gap-11 mt-3 mb-3">
					{providers.map((provider) => (
						<CardTopProvider key={provider.id} data={provider} />
					))}
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default TopProviders;
