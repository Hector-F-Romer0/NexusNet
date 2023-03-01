import React from "react";
import {
	NavBarContainerLogo,
	NavBarContainerIMG,
	NavBarH1,
	NavBarContainerTitles,
	NavBarTitle,
} from "../../styled-components/index/Navbar";
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
				<NavBarTitle>Home</NavBarTitle>
				<NavBarTitle>Top providers</NavBarTitle>
				<NavBarTitle>Chats</NavBarTitle>
				<NavBarTitle>Account</NavBarTitle>
				<NavBarTitle>Log Out</NavBarTitle>
				{/* <NavBarH2></NavBarH2>
				<NavBarH2>Chats</NavBarH2>
				<NavBarH2>Account</NavBarH2>
				<NavBarH2>Log out</NavBarH2> */}
			</NavBarContainerTitles>
		</NavBarLayout>
	);
};

export default UserNavBar;
