import React from "react";
import UserNavBar from "../../components/client/UserNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import CardContainerTopProvider from "../../components/client/CardContainerTopProvider";
const TopProviders = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Top Providers</h1>
				<CardContainerTopProvider />
			</MainContentLayout>
		</Layout>
	);
};

export default TopProviders;
