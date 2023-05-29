import { Schema, model } from "mongoose";

export const commentSchema = Schema(
	{
		comment: { type: String, required: true },
		rate: { type: Number, required: true },
		writtenBy: {
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
commentSchema.methods.toJSON = function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
};

const commentModel = model("Comment", commentSchema);

export { commentModel };
