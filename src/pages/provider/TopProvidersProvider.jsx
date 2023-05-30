import React from "react";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import ContainerTopProvider from "../../components/shared/ContainerTopProvider";
import Footer from "../../components/shared/Footer";
import Loading from "../../components/shared/Loading";
import { useState } from "react";

const TopProvidersProvider = () => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		<Loading />;
	}

	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<h1>Top Providers</h1>
				<ContainerTopProvider />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default TopProvidersProvider;
