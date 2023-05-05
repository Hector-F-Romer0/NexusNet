import { response } from "express";

export const handleErrorHTTP = (res = response, error, HTTPCode, CustomErrorMessage) => {
	console.log(error);
	return res.status(HTTPCode).json({ error: CustomErrorMessage || "Server error" });
};
