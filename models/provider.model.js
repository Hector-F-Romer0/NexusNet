import { Schema, model } from "mongoose";

import { keywordSchema } from "./keyword.model.js";
import { caseSchema } from "./case.model.js";

export const providerSchema = Schema({
	names: { type: String, required: true, minLength: 3, maxLength: 30, trim: true },
	lastnames: { type: String, required: true, minLength: 3, maxLength: 30, trim: true },
	username: { type: String, required: true, minLength: 3, maxLength: 15, trim: true },
	email: { type: String, required: true, unique: true, trim: true },
	password: { type: String, required: true },
	typeUser: { type: String, required: true },
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
	category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
	service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
	keywords: [
		{
			type: Schema.Types.ObjectId,
			ref: "Keyword",
			required: true,
		},
	],
	phrase: { type: String, required: true, minLength: 3, maxLength: 500, trim: true },
});

const providerModel = model("Provider", providerSchema);

export default providerModel;
