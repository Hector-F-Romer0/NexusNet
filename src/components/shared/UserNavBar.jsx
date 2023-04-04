import React from "react";
import {
	NavBarContainerLogo,
	NavBarContainerIMG,
	NavBarH1,
	NavBarContainerTitles,
	NavBarTitle,
} from "../../styled-components/index/Navbar.style";
import logo from "../../assets/logo.png";
import { NavBarLayout } from "../../styled-components/index/Layout";

const UserNavBar = () => {
	return (
		<NavBarLayout>
			<NavBarContainerLogo>
				<NavBarContainerIMG src={logo}></NavBarContainerIMG>
				<NavBarH1>NexusNet</NavBarH1>
			</NavBarContainerLogo>
			<NavBarContainerTitles>
				<NavBarTitle to="/client/home">Home</NavBarTitle>
				<NavBarTitle to="/client/view/top">Top Providers</NavBarTitle>
				<NavBarTitle to="/client/chats">Chats</NavBarTitle>
				<NavBarTitle to="/client/account">Account</NavBarTitle>
				<NavBarTitle to="/signin">Log Out</NavBarTitle>
			</NavBarContainerTitles>
		</NavBarLayout>
	);
};

export default UserNavBar;
