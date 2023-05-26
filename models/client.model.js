import { Schema, model } from "mongoose";

import { caseSchema } from "./case.model.js";

export const clientSchema = Schema({
	names: { type: String, required: true },
	lastnames: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	country: { type: String, required: true },
	state: { type: String, required: true },
	city: { type: String, required: true },
	urlImg: { type: String, required: true },
	cases: [
		{
			type: Schema.Types.ObjectId,
			ref: "Case",
			required: false,
		},
	],
});

const clientModel = model("Client", clientSchema);

export default clientModel;
