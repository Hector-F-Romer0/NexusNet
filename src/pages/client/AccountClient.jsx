import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const AccountClient = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<CardAccount></CardAccount>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default AccountClient;
