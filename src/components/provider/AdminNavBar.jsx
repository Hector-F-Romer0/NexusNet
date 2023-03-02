import React from "react";
import { NavBarLayout } from "../../styled-components/index/Layout";
import logo from "../../assets/logo.png";
import {
	NavBarContainerIMG,
	NavBarContainerLogo,
	NavBarContainerTitles,
	NavBarH1,
	NavBarTitle,
} from "../../styled-components/index";

const AdminNavBar = () => {
	return (
		<NavBarLayout>
			<NavBarContainerLogo>
				<NavBarContainerIMG src={logo}></NavBarContainerIMG>
				<NavBarH1>NexusNet</NavBarH1>
			</NavBarContainerLogo>
			<NavBarContainerTitles>
				<NavBarTitle>Home</NavBarTitle>
				<NavBarTitle>Categories</NavBarTitle>
				<NavBarTitle>Services</NavBarTitle>
				<NavBarTitle>Key words</NavBarTitle>
				<NavBarTitle>Log Out</NavBarTitle>
			</NavBarContainerTitles>
		</NavBarLayout>
	);
};

export default AdminNavBar;
