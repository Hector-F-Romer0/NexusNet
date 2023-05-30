import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

import { FiSend, FiCornerUpLeft } from "react-icons/fi";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import InputChat from "./InputChat";
import { getUserIdRequest } from "../../services/users.services";
import { setMessageHistoryToMap } from "../../store/slices/chat/chatSlice";
import { useDispatch } from "react-redux";

const socket = io("http://localhost:4000");

const ChatMessage = ({ socket }) => {
	const { messaageHistory, userIdSesion, recipientIdUser, chatId } = useSelector((state) => state.chat);
	const [recipientUser, setRecipientUser] = useState();

	useEffect(() => {
		const getRecipientData = async () => {
			const res = await getUserIdRequest(recipientIdUser);
			setRecipientUser(res);
		};

		getRecipientData();
	}, [recipientIdUser]);

	const dispatch = useDispatch();

	useEffect(() => {
		socket.on("send-message", (payload) => {
			console.log(payload);
			dispatch(setMessageHistoryToMap(payload));
		});

		return () => {
			socket.disconnect();
		};
	}, [socket, dispatch]);

	// console.log(chatId);

	return chatId ? (
		<div className="flex flex-col mb-20 w-2/4 mx-2 my-10">
			<div className="flex sm:items-center border-b-2 border-gray-200">
				<FiCornerUpLeft size={30} className="mx-3"></FiCornerUpLeft>
				<div className="relative">
					<span className="absolute text-green-500 right-0 bottom-0">
						<svg width="20" height="20">
							{/* <circle cx="8" cy="8" r="8" fill="currentColor"></circle> */}
						</svg>
					</span>
					<img
						src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
						alt=""
						className="w-10 sm:w-16 h-10 sm:h-16 rounded-full mx-3"
					/>
				</div>
				<div className="flex flex-col leading-tight mx-3">
					<div className="text-2xl mt-1 flex items-center">
						<span className="text-gray-700 mr-3">{`${recipientUser?.names} ${recipientUser?.lastnames}`}</span>
					</div>
					<span className="text-lg text-gray-600">{recipientUser?.username}</span>
				</div>
			</div>
			<div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-scroll bg-[#E8F1FF]">
				{/* !CAMBIAR EL ._id a .id */}
				{messaageHistory.map((message) => {
					// console.log(`ID de sesión actual ${userIdSesion}`);
					// console.log(message);
					if (message.sender === userIdSesion) {
						return <SenderMessage key={message._id} message={message.message} />;
					} else {
						return <RecipientMessage key={message._id} message={message.message} />;
					}
				})}
			</div>
			<InputChat socket={socket} />
		</div>
	) : (
		<div className="flex flex-col justify-center items-center w-80 mx-32 mb-24">
			<h1 className="text-4xl font-montserrat font-bold"> You haven't selected any chat </h1>
			<h2 className="text-2xl font-montserrat font-semibold">
				Select one of your chats so that you can interact in real time.
			</h2>
		</div>
	);
};

export default ChatMessage;
