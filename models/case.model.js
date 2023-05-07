import { Schema, model } from "mongoose";

export const caseSchema = Schema({
	caseTitle: { type: String, required: true },
	caseDescription: { type: String, required: true },
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: "Client",
		required: true,
	},
	createdAt: { type: Date, required: true, default: Date.now() },
	takenOn: { type: Date, required: false },
	takenBy: {
		type: Schema.Types.ObjectId,
		ref: "Provider",
		required: true,
	},
	completed: { type: Boolean, required: false, default: false },
	keywords: [
		{
			type: Schema.Types.ObjectId,
			ref: "Keyword",
			required: true,
		},
	],
	category: {
		type: Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},
	service: {
		type: Schema.Types.ObjectId,
		ref: "Service",
		required: true,
	},
	files: { type: [String], required: false },
});

const caseModel = model("Case", caseSchema);

export default caseModel;
