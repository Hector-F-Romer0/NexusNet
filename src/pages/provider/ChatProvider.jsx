import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import ContainerChats from "../../components/shared/ContainerChats";
import ChatMessage from "../../components/shared/ChatMessage";
import Footer from "../../components/shared/Footer";

const ChatProvider = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<div>
					<ContainerChats></ContainerChats>
					<ChatMessage></ChatMessage>
				</div>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default ChatProvider;
