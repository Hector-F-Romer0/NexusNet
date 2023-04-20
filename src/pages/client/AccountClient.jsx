import React from "react";
import { useSelector } from "react-redux";

import CardAccount from "../../components/shared/CardAccount";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";

const AccountClient = () => {
	return (
		<section className="flex">
			<SideBar />
			<div className="w-full">
				<CardAccount />
				<Footer />
			</div>
		</section>
	);
};

export default AccountClient;
