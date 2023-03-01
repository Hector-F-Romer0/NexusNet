import React from "react";
import CardAccount from "../../components/client/CardAccount";
import UserNavBar from "../../components/client/UserNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const AccountClient = () => {
	return (
		<Layout>
			<NavBarLayout>
				<UserNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<CardAccount></CardAccount>
			</MainContentLayout>
		</Layout>
	);
};

export default AccountClient;
