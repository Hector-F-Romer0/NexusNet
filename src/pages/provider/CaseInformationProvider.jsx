import React from "react";
import SideBar from "../../components/shared/SideBar";
import { CardInfoCase } from "../../components/shared/CardInfoCase";
import Footer from "../../components/shared/Footer";

const CaseInformationProvider = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div>
				<CardInfoCase></CardInfoCase>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default CaseInformationProvider;
