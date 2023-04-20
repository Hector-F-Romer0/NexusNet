import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import ContainerChats from "../../components/shared/ContainerChats";
import ChatMessage from "../../components/shared/ChatMessage";
import Footer from "../../components/shared/Footer";

const ChatProvider = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div>
				{/* <ContainerChats></ContainerChats>
				<ChatMessage></ChatMessage> */}
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default ChatProvider;
