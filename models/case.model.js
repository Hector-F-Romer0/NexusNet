import { Schema, model } from "mongoose";

export const caseSchema = Schema(
	{
		caseTitle: { type: String, required: true },
		caseDescription: { type: String, required: true },
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		takenOn: { type: Date, required: false, default: null },
		takenBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: false,
			default: null,
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

const caseModel = model("Case", caseSchema);

export default caseModel;
