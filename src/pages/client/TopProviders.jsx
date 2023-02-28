import React from "react";
import ClientNavBar from "../../components/client/ClientNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import CardContainerTopProvider from "../../components/client/CardContainerTopProvider";
const TopProviders = () => {
	return (
		<Layout>
			<NavBarLayout>
				<ClientNavBar />
			</NavBarLayout>
			<MainContentLayout>
                <h1>Top Providers</h1>
				<CardContainerTopProvider />
			</MainContentLayout>
		</Layout>
	);
};

export default TopProviders;