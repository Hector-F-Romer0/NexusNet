import { Schema, model } from "mongoose";

export const keywordSchema = Schema({
	label: { type: String, required: true },
});

//* Modificaremos el método del modelo que retorna el JSON del modelo. Esto lo haremos para arrojar en la respuesta del protocolo el "_id" de Mongo como "id"
keywordSchema.methods.toJSON = function () {
	const { __v, _id, ...category } = this.toObject();
	category.id = _id;
	return category;
};

const keyWordModel = model("Keyword", keywordSchema);

export { keyWordModel };
