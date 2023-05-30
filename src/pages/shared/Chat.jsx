import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import SideBar from "../../components/shared/SideBar";
import ContainerChats from "../../components/shared/ContainerChats";
import ChatMessage from "../../components/shared/ChatMessage";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";

const socket = io("http://localhost:4000");

const Chat = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex w-full">
				<div className="flex w-full h-screen">
					<ContainerChats socket={socket} />
					<ChatMessage socket={socket} />
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default Chat;
