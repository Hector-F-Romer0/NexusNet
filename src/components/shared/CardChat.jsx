import React from "react";
import { getUserToken } from "../../helpers/localStorageManagement";
import { createChatRequest } from "../../services/chat.services";

const CardChat = ({ data }) => {
	const handleAccessChat = async (e) => {
		// TODO: verificar si el chat existe en BD

		// TODO: Si no existe chat, crear el chat en la BD
		const userToken = getUserToken();

		const res = await createChatRequest(data.id, userToken);
		console.log(res);
		// TODO: mostrar en pantalla las conversaciones antiguas.
	};

	return (
		<div className="flex flex-row gap-2 sm:gap-8 min-w-sm py-8 px-8 rounded-lg justify-between bg-[#D3E5FF] items-center w-full">
			<img className="h-auto w-1/4 rounded-lg" src={"/src/assets/Duck.jpg"} alt="Provider photo" />
			<h3
				onClick={(e) => handleAccessChat(e)}
				className="text-lg font-bold">{`${data?.names} ${data?.lastnames}`}</h3>
			{/* <circle className="w-6 h-6 rounded-full bg-[#0ED92E]"></circle> */}
		</div>
	);
};

export default CardChat;
