import React from "react";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import CardAccount from "../../components/shared/CardAccount";
import AdminSideBar from "../../components/admin/AdminSideBar";

const ViewAccountProviderAdmin = () => {
	return (
		<Layout>
			<NavBarLayout>
				<AdminSideBar />
			</NavBarLayout>
			<MainContentLayout>
				<CardAccount />
			</MainContentLayout>
		</Layout>
	);
};

export default ViewAccountProviderAdmin;
