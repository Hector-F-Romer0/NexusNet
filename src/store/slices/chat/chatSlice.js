import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	messaageHistory: [],
	isLoading: false,
	chatId: "",
	users: [],
	userIdSesion: "",
	recipientIdUser: "",
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setChatInformation: (state, action) => {
			// console.log("Set chat");
			const usersInvolved = action.payload.chat.users;
			// Obtain the other id without brackets
			const [recipientUserId] = usersInvolved.filter((userId) => userId !== action.payload.userIdSesion);
			// console.log(action.payload.userIdSesion);
			state.messaageHistory = action.payload.chat.messages;
			state.chatId = action.payload.chat.id;
			state.users = action.payload.chat.users;
			state.userIdSesion = action.payload.userIdSesion;
			state.recipientIdUser = recipientUserId;
		},
		setMessageHistory: (state, action) => {
			state.messaageHistory = action.payload;
		},
		setMessageHistoryToMap: (state, action) => {
			console.log(action.payload)
			state.messaageHistory.push(action.payload);
		},
		setChatId: (state, action) => {
			state.chatId = action.payload;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
	},
});

export const { setMessageHistory, setMessageHistoryToMap, startLoading, setChatId, setChatInformation } = chatSlice.actions;