import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../helpers/localStorageManagement";
import { createChatRequest } from "../../services/chat.services";
import { setChatInformation } from "../../store/slices/chat/chatSlice";

const CardChat = ({ data, socket }) => {
	const dispatch = useDispatch();
	const { userIdSesion } = useSelector((state) => state.chat);

	const handleAccessChat = async (e) => {
		const userToken = getUserToken();

		// TODO: Si no existe chat, crear el chat en la BD
		const res = await createChatRequest(data.id, userToken);
		// console.log(res);
		// Backend return 201 and the new chat document if chat doesn't exist
		if (res.status === 201) {
			// console.log("Chat creado");0
			dispatch(setChatInformation({ chat: res.data.newChat, userIdSesion: res.data.userIdSesion }));
			// console.log("Distpatch?");
			socket.emit("enter-chat", { chatId: res.data.newChat.id, idUser: userIdSesion });
			return;
		}

		// TODO: verificar si el chat existe en BD
		if (res.status === 409) {
			dispatch(setChatInformation({ chat: res.data.existingChat, userIdSesion: res.data.userIdSesion }));
			socket.emit("enter-chat", { chatId: res.data.existingChat.id, idUser: userIdSesion }, (algo) => {
				console.log("ID de la sala a la que me conecté: " + algo);
			});

			return;
		}

		// TODO: mostrar en pantalla las conversaciones antiguas.
	};

	socket.on("enter-chat", (payload) => {
		console.log("ESCUCHANDO CUANDO ENTRA A UNA ROOM");
		console.log(payload);
	});

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
