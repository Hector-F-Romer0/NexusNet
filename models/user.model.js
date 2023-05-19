import { Schema, model } from "mongoose";

import { caseSchema } from "./case.model.js";

const userSchema = Schema({
	names: { type: String, required: true, minLength: 3, maxLength: 30, trim: true },
	lastnames: { type: String, required: true, minLength: 3, maxLength: 30, trim: true },
	username: { type: String, required: true, minLength: 3, maxLength: 15, trim: true },
	email: { type: String, required: true, unique: true, trim: true },
	password: { type: String, required: true },
	role: {
		type: Schema.Types.ObjectId,
		ref: "Role",
		required: true,
	},
	phoneNumber: { type: String, required: true, minLength: 10, maxLength: 10 },
	country: { type: String, required: true },
	state: { type: String, required: true },
	city: { type: String, required: true },
	urlImg: { type: String, required: true },
	cases: {
		type: [caseSchema],
		required: false,
	},
	rate: { type: Number, required: false, default: 0 },
	category: { type: Schema.Types.ObjectId, ref: "Category", required: false },
	service: { type: Schema.Types.ObjectId, ref: "Service", required: false },
	keywords: [
		{
			type: Schema.Types.ObjectId,
			ref: "Keyword",
			required: false,
		},
	],
	phrase: { type: String, required: false, minLength: 3, maxLength: 500, trim: true },
});

const userModel = model("User", userSchema);

export { userModel, userSchema };
