import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import UserNavBar from "../../components/shared/UserNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const AccountClient = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<CardAccount></CardAccount>
			</MainContentLayout>
		</Layout>
	);
};

export default AccountClient;
