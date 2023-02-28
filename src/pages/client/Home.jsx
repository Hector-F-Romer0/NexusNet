import React from "react";
import CardContainer from "../../components/client/CardContainer";
import ClientNavBar from "../../components/client/ClientNavBar";
import { ButtonContainerStyle, ButtonStyle } from "../../styled-components/index/button.style";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const Home = () => {
	return (
		<Layout>
			<NavBarLayout>
				<ClientNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<h1>Welcome to my cases - Client</h1>
				<ButtonContainerStyle>
					<ButtonStyle>Search Providers</ButtonStyle>
					<ButtonStyle>Upload your cases</ButtonStyle>
				</ButtonContainerStyle>
				<CardContainer />
			</MainContentLayout>
		</Layout>
	);
};

export default Home;
