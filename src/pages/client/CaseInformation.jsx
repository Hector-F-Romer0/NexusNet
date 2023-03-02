import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import { CardInfoCase } from "../../components/shared/CardInfoCase";

const CaseInformation = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<CardInfoCase></CardInfoCase>
			</MainContentLayout>
		</Layout>
	);
};

export default CaseInformation;
