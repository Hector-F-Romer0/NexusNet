import { Schema, model } from "mongoose";

const clientSchema = Schema({
	names: { type: String, required: true },
	lastnames: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	typeUser: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	country: { type: String, required: true },
	state: { type: String, required: true },
	city: { type: String, required: true },
	urlImg: { type: String, required: true },
	cases: { type: [String], required: true }, //! Actualizar esta propiedad a un arreglo del modelo de Casos
});

const clientModel = model("Client", clientSchema);

export default clientModel;
