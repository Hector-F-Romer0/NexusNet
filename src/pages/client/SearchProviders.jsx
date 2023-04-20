import React from "react";
import ContainerList from "../../components/shared/ContainerList";
import ContainerProvider from "../../components/shared/ContainerProvider";
import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const SearchProviders = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full">
				<SearchBar></SearchBar>
				<ContainerList></ContainerList>
				<ContainerProvider />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default SearchProviders;
