import { Schema, model } from "mongoose";

export const serviceSchema = Schema({
	label: { type: String, required: true },
});

const serviceModel = model("Service", serviceSchema);

export default serviceModel;
