import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import { CardInfoCase } from "../../components/shared/CardInfoCase";
import Footer from "../../components/shared/Footer";

const CaseInformationProvider = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<CardInfoCase></CardInfoCase>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default CaseInformationProvider;
