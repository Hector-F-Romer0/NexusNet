import React from "react";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import CardAccount from "../../components/shared/CardAccount";
import AdminNavBar from "../../components/admin/AdminNavBar";

const ViewAccountProviderAdmin = () => {
	return (
		<Layout>
			<NavBarLayout>
				<AdminNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<CardAccount />
			</MainContentLayout>
		</Layout>
	);
};

export default ViewAccountProviderAdmin;
