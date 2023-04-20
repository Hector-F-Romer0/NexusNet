import React from "react";
import CardRateProvider from "../../components/client/CardRateProvider";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";

const RateProvider = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full">
				<h1>Rate provider</h1>
				<CardRateProvider />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default RateProvider;
