import React from "react";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import ContainerChats from "../../components/shared/ContainerChats";
import ChatMessage from "../../components/shared/ChatMessage";

const ChatProvider = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<div>
					<ContainerChats></ContainerChats>
					<ChatMessage></ChatMessage>
				</div>
			</MainContentLayout>
		</Layout>
	);
};

export default ChatProvider;
