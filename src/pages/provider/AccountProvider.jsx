import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";

const AccountProvider = () => {
	return (
		<section className="flex">
			<SideBar />
			<div>
				<CardAccount></CardAccount>
				<Footer />
			</div>
		</section>
	);
};

export default AccountProvider;
