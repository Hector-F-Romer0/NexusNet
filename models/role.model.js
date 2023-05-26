import { Schema, model } from "mongoose";

export const roleSchema = Schema(
	{
		role: { type: String, required: true, minLength: 3, maxLength: 30, trim: true },
	},
	{
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

//* Modificaremos el método del modelo que retorna el JSON del modelo. Esto lo haremos para arrojar en la respuesta del protocolo el "_id" de Mongo como "id"
roleSchema.methods.toJSON = function () {
	const { __v, _id, ...role } = this.toObject();
	role.id = _id;
	return role;
};

export const roleModel = model("Role", roleSchema);
