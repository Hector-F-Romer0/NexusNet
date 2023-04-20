import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	usersDB: [],
	isLoading: false,
};

export const usersDBlice = createSlice({
	name: "usersDB",
	initialState,
	reducers: {
		setUsersDB: (state, action) => {
			state.usersDB = action.payload;
		},
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		addUserDB: (state, action) => {
			// console.log("LO QUE LLEGA");
			// console.log(action.payload);
			const users = current(state.usersDB);
			// console.log("LO QUE TENGO");
			// console.log(users);
			const newUserAdded = [...users, action.payload];
			console.log(newUserAdded);
			state.usersDB = newUserAdded;
		},
	},
});

export const { setUsersDB, startLoading, addUserDB } = usersDBlice.actions;
