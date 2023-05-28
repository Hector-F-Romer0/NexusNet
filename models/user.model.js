import { Schema, model } from "mongoose";
import { caseSchema } from "./case.model.js";

export const USER_ROLES = Object.freeze({
	ADMIN: "6466e4f3f6031b477e59c2e5",
	PROVIDER: "6466e5f41d1fe6f36287dc40",
	CLIENT: "6466e5f81d1fe6f36287dc43",
});

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

//* Modificaremos el método del modelo que retorna el JSON del modelo. Esto lo haremos para arrojar en la respuesta del protocolo el "_id" de Mongo como "id"
userSchema.methods.toJSON = function () {
	const { __v, _id, ...user } = this.toObject();
	user.id = _id;
	return user;
};

const userModel = model("User", userSchema);

export { userModel, userSchema };
