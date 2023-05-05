import { Schema, model } from "mongoose";

const categorySchema = Schema({
	label: { type: String, required: true },
});

const categoryModel = model("Category", categorySchema);

export default categoryModel;
