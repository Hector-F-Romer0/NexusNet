import React from "react";
import CardContainer from "../../components/client/CardContainer";
import UserNavBar from "../../components/client/UserNavBar";
import { ButtonContainerStyle, ButtonStyle } from "../../styled-components/index/Button.style";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const Home = () => {
	return (
		<Layout>
			<UserNavBar />
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
