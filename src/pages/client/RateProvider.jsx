import React from "react";
import CardRateProvider from "../../components/client/CardRateProvider";
import ClientNavBar from "../../components/client/ClientNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const RateProvider = () => {
	return (
		<Layout>
			<NavBarLayout>
				<ClientNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<h1>Rate provider</h1>
				<CardRateProvider />
			</MainContentLayout>
		</Layout>
	);
};

export default RateProvider;
