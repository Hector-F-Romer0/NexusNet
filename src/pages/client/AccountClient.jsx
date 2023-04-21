import React from "react";
import { useSelector } from "react-redux";

import CardAccount from "../../components/shared/CardAccount";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";

const AccountClient = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex-col justify-center items-center">
				<CardAccount></CardAccount>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default AccountClient;
