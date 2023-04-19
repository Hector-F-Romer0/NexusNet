import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	user: {
		id: null,
		names: null,
		lastnames: null,
		username: null,
		email: null,
		password: null,
		typeUser: null,
		photoNumber: null,
		country: null,
		state: null,
		city: null,
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;