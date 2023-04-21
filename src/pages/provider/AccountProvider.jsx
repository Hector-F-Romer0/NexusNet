import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";

const AccountProvider = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full">
				<CardAccount></CardAccount>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default AccountProvider;
