import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";

const ViewAccountProvider = () => {
	return (
		<Layout>
			<NavBarLayout>
				<SideBar />
			</NavBarLayout>
			<MainContentLayout>
				<CardAccount />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default ViewAccountProvider;
