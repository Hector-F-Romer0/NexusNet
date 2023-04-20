import React from "react";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import ContainerTopProvider from "../../components/shared/ContainerTopProvider";
import Footer from "../../components/shared/Footer";
import CardTopProvider from "../../components/shared/CardTopProvider";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";

const TopProviders = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className=" text-xl text-gray-900 font-semibold">
				<h1 className="text-4xl font-bold text-center mt-9">Top providers</h1>
				<div className="flex flex-col items-center justify-center flex-wrap gap-11 mt-10 mb-5">
					<CardTopProvider img={"/src/assets/Provider1.jpg"} />
					<CardTopProvider img={"/src/assets/Provider3.jpg"} />
					<CardTopProvider img={"/src/assets/Provider1.jpg"} />
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default TopProviders;
