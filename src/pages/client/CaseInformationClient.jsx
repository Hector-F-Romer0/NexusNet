import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import { CardInfoCase } from "../../components/shared/CardInfoCase";

const CaseInformationClient = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<CardInfoCase></CardInfoCase>
			</MainContentLayout>
		</Layout>
	);
};

export default CaseInformationClient;
