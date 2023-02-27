import React from "react";
import CardContainer from "../../components/client/CardContainer";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const Home = () => {
	return (
		<Layout>
			<NavBarLayout>
				<h1>Home usuario</h1>
			</NavBarLayout>
			<MainContentLayout>
				<h1>Welcome to my cases - Client</h1>
				<button>Search Providers</button>
				<button>Upload your cases</button>
				<CardContainer />
			</MainContentLayout>
		</Layout>
	);
};

export default Home;
