import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import Footer from "../../components/shared/Footer";

const AccountProvider = () => {
	return (
		<Layout>
			<NavBarLayout>
				<UserNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<CardAccount />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default AccountProvider;
