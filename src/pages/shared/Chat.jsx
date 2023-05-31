import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import SideBar from "../../components/shared/SideBar";
import ContainerChats from "../../components/shared/ContainerChats";
import ChatMessage from "../../components/shared/ChatMessage";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";
import { useDispatch } from "react-redux";
import { clearChatInformation } from "../../store/slices/chat/chatSlice";

const socket = io(import.meta.env.VITE_BACKEND_URL);

const Chat = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		dispatch(clearChatInformation());
		setIsLoading(false);
	}, []);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex w-full">
				<div className="flex w-full h-screen">
					<ContainerChats setIsLoading={setIsLoading} isLoading={isLoading} socket={socket} />
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
