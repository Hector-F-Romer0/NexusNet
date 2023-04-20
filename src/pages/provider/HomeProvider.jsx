import React from "react";
import CaseContainer from "../../components/shared/CaseContainer";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";

const HomeProvider = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full">
				<h1>Welcome to my cases - Provider</h1>
				{/* <CaseContainer /> */}
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default HomeProvider;
