import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import { CardInfoCase } from "../../components/shared/CardInfoCase";
import Footer from "../../components/shared/Footer";

const CaseInformationProvider = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<CardInfoCase></CardInfoCase>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default CaseInformationProvider;
