import { Schema, model } from "mongoose";

export const roleSchema = Schema({
	role: { type: String, required: true, minLength: 3, maxLength: 30, trim: true },
});

export const roleModel = model("Role", roleSchema);
