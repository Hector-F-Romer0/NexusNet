import { Schema, model } from "mongoose";

const keyWordSchema = Schema({
	label: { type: String, required: true },
});

const keyWordModel = model("Keyword", keyWordSchema);

export default keyWordModel;
