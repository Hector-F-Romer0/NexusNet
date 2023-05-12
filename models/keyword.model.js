import { Schema, model } from "mongoose";

export const keywordSchema = Schema({
	label: { type: String, required: true },
});

const keyWordModel = model("Keyword", keywordSchema);

export default keyWordModel;
