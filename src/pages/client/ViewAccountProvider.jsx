import React from "react";
import CardAccount from "../../components/client/CardAccount";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import ProviderViewCardAccount from "../../components/client/ProviderViewCardAccount";
import UserNavBar from "../../components/client/UserNavBar";

const ViewAccountProvider = () => {
	return (
		<Layout>
			<NavBarLayout>
				<UserNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<ProviderViewCardAccount />
			</MainContentLayout>
		</Layout>
	);
};

export default ViewAccountProvider;
