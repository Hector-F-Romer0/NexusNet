import React from "react";
import CardContainer from "../../components/client/CardContainer";
import { ButtonContainerStyle, ButtonClientStyle } from "../../styled-components/index/button.style";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import {
	NavBar,
	NavBarContainerLogo,
	NavBarContainerIMG,
	NavBarH1,
	NavBarContainerH,
	NavBarH2,
} from "../../styled-components/index/Navbar";
import logo from "../../assets/logo.png";

const Home = () => {
	return (
		<Layout>
			<NavBarLayout>
				<NavBar>
					<NavBarContainerLogo>
						<NavBarContainerIMG src={logo}></NavBarContainerIMG>
						<NavBarH1>NexusNet</NavBarH1>
					</NavBarContainerLogo>
					<NavBarContainerH>
						<NavBarH2>Home</NavBarH2>
						<NavBarH2>Top providers</NavBarH2>
						<NavBarH2>Chats</NavBarH2>
						<NavBarH2>Account</NavBarH2>
						<NavBarH2>Log out</NavBarH2>
					</NavBarContainerH>
				</NavBar>
			</NavBarLayout>
			<MainContentLayout>
				<h1>Welcome to my cases - Client</h1>
				<ButtonContainerStyle>
					<ButtonClientStyle>Search Providers</ButtonClientStyle>
					<ButtonClientStyle>Upload your cases</ButtonClientStyle>
				</ButtonContainerStyle>
				<CardContainer />
			</MainContentLayout>
		</Layout>
	);
};

export default Home;
