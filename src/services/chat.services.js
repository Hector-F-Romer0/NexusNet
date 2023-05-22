import { instanceBackend } from "../db/config";

const createChatRequest = async (idUserForCreatingChat, token) => {
	try {
		const res = await instanceBackend.post(
			`/chat`,
			{ userForCreatingChat: idUserForCreatingChat },
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		console.log(res);
		return res.data;
	} catch (error) {
		return error.response;
	}
};

export { createChatRequest };
