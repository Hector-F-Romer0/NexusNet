import React from "react";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import {
	NavBar,
	NavBarContainerLogo,
	NavBarContainerIMG,
	NavBarH1,
	NavBarContainerH,
	NavBarH2,
} from "../../styled-components/index/Navbar";
import { TextCategory, BaseCategory } from "../../styled-components/index/tags/category";

const Home = () => {
	return (
		<Layout>
			<NavBarLayout>
				<NavBar>
					<NavBarContainerLogo>
						<NavBarContainerIMG> a</NavBarContainerIMG>
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
				<BaseCategory>hola</BaseCategory>
			</MainContentLayout>
		</Layout>
	);
};

export default Home;
