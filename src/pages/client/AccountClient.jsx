import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const AccountClient = () => {
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

export default AccountClient;
