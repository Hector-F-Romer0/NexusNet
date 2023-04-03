import React from "react";
import { NavBarLayout } from "../../styled-components/index/Layout";
import logo from "../../assets/logo.png";
import {
	NavBarContainerIMG,
	NavBarContainerLogo,
	NavBarContainerTitles,
	NavBarH1,
	NavBarTitle,
} from "../../styled-components/index/index";

const AdminNavBar = () => {
	return (
		<NavBarLayout>
			<NavBarContainerLogo>
				<NavBarContainerIMG src={logo}></NavBarContainerIMG>
				<NavBarH1>NexusNet</NavBarH1>
			</NavBarContainerLogo>
			<NavBarContainerTitles>
				<NavBarTitle to={"/admin/home"}>Home</NavBarTitle>
				<NavBarTitle to={"/admin/categories"}>Categories</NavBarTitle>
				<NavBarTitle to={"/admin/services"}>Services</NavBarTitle>
				<NavBarTitle to={"/admin/keywords"}>Key words</NavBarTitle>
				<NavBarTitle to={"/signin"}>Log Out</NavBarTitle>
			</NavBarContainerTitles>
		</NavBarLayout>
	);
};

export default AdminNavBar;
