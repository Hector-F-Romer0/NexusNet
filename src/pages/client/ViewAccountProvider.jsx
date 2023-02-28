import React from "react";
import CardAccount from "../../components/client/CardAccount";
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
import ProviderViewCardAccount from "../../components/client/ProviderViewCardAccount";

const ViewAccountProvider = () => {
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
				<ProviderViewCardAccount/>
			</MainContentLayout>
		</Layout>
	);
};

export default ViewAccountProvider;
