import { Schema, model } from "mongoose";

export const messageSchema = Schema(
	{
		message: { type: String, required: true },
		sender: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

//* Modificaremos el método del modelo que retorna el JSON del modelo. Esto lo haremos para arrojar en la respuesta del protocolo el "_id" de Mongo como "id"
messageSchema.methods.toJSON = function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
};

const messageModel = model("Message", messageSchema);

export { messageModel };
