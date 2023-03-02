import React from "react";
import UserNavBar from "../../components/shared/UserNavBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import ContainerTopProvider from "../../components/shared/ContainerTopProvider";
import Footer from "../../components/shared/Footer";

const TopProvidersClient = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Top Providers</h1>
				<ContainerTopProvider />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default TopProvidersClient;
