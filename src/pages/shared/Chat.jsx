import React, { useState } from "react";
import SideBar from "../../components/shared/SideBar";
import ContainerChats from "../../components/shared/ContainerChats";
import ChatMessage from "../../components/shared/ChatMessage";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";

const Chat = () => {
	// const [messageHistoryChat, setmessageHistoryChat] = useState([]);

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex w-full">
				<div className="flex w-full h-screen">
					<ContainerChats></ContainerChats>
					<ChatMessage />
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default Chat;