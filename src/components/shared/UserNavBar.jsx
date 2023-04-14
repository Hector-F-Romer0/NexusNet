import React, { Fragment, useRef, useState } from "react";
import {
	NavBarContainerLogo,
	NavBarContainerIMG,
	NavBarH1,
	NavBarContainerTitles,
	NavBarTitle,
} from "../../styled-components/index/Navbar.style";
import logo from "../../assets/logo.png";
import { NavBarLayout } from "../../styled-components/index/Layout";
import { FiAlignJustify, FiX } from "react-icons/fi";

const UserNavBar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const openSidebar = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			<span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={() => openSidebar()}>
				<FiAlignJustify className="bi bi-filter-left px-2 bg-navbar rounded-md"></FiAlignJustify>
			</span>
			<div
				className={`${
					openMenu ? "hidden" : ""
				} sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-navbar`}>
				<div className="text-gray-100 text-xl">
					<div className="p-2.5 mt-1 flex items-center">
						<i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
						<h1 className="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
						<FiX className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={() => openSidebar()}></FiX>
					</div>
					<div className="my-2 bg-gray-600 h-[1px]"></div>
				</div>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
				</div>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
				</div>
			</div>
		</>

		// <NavBarLayout>
		// 	<NavBarContainerLogo>
		// 		<NavBarContainerIMG src={logo}></NavBarContainerIMG>
		// 		<NavBarH1>NexusNet</NavBarH1>
		// 	</NavBarContainerLogo>
		// 	<NavBarContainerTitles>
		// 		<NavBarTitle to="/client/home">Home</NavBarTitle>
		// 		<NavBarTitle to="/client/view/top">Top Providers</NavBarTitle>
		// 		<NavBarTitle to="/client/chats">Chats</NavBarTitle>
		// 		<NavBarTitle to="/client/account">Account</NavBarTitle>
		// 		<NavBarTitle to="/signin">Log Out</NavBarTitle>
		// 	</NavBarContainerTitles>
		// </NavBarLayout>
	);
};

export default UserNavBar;
