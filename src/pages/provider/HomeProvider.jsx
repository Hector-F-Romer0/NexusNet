import React from "react";
import CaseContainer from "../../components/shared/CaseContainer";
import Footer from "../../components/shared/Footer";
import UserNavBar from "../../components/shared/UserNavBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const HomeProvider = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Welcome to my cases - Provider</h1>
				<CaseContainer />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default HomeProvider;
