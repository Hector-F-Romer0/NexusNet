import { Schema, model } from "mongoose";

export const serviceSchema = Schema({
	label: { type: String, required: true },
});

//* Modificaremos el método del modelo que retorna el JSON del modelo. Esto lo haremos para arrojar en la respuesta del protocolo el "_id" de Mongo como "id"
serviceSchema.methods.toJSON = function () {
	const { __v, _id, ...category } = this.toObject();
	category.id = _id;
	return category;
};

const serviceModel = model("Service", serviceSchema);

export { serviceModel };
