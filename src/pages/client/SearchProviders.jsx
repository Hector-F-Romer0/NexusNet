import React from "react";
import ContainerList from "../../components/shared/ContainerList";
import ContainerProvider from "../../components/shared/ContainerProvider";
import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import SideBar from "../../components/shared/SideBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const SearchProviders = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<SearchBar></SearchBar>
				<ContainerList></ContainerList>
				<ContainerProvider />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default SearchProviders;
