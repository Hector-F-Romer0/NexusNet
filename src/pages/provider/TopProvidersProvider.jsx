import React from "react";
import UserNavBar from "../../components/shared/UserNavBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import ContainerTopProvider from "../../components/shared/ContainerTopProvider";

const TopProvidersProvider = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Top Providers</h1>
				<ContainerTopProvider />
			</MainContentLayout>
		</Layout>
	);
};

export default TopProvidersProvider;
