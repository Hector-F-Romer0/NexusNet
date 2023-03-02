import React from "react";
import ContainerList from "../../components/shared/ContainerList";
import ContainerProvider from "../../components/shared/ContainerProvider";
import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import UserNavBar from "../../components/shared/UserNavBar";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const SearchProviders = () => {
	return (
		<Layout>
			<UserNavBar />
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
