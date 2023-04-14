import React from "react";
import CardRateProvider from "../../components/client/CardRateProvider";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const RateProvider = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<h1>Rate provider</h1>
				<CardRateProvider />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default RateProvider;
