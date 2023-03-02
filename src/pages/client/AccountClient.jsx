import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import Footer from "../../components/shared/Footer";
import UserNavBar from "../../components/shared/UserNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const AccountClient = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<CardAccount></CardAccount>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default AccountClient;
