import React from "react";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const Home = () => {
	return (
		<Layout>
			<NavBarLayout>
				<h1>Home usuario</h1>
			</NavBarLayout>
			<MainContentLayout>
				<h2>Hola</h2>
			</MainContentLayout>
		</Layout>
	);
};

export default Home;
