import express from "express";
import passport from "passport";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { loginGoogle, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

import { auth } from "../middlewares/google.js";

router.post(
	"/login",
	[
		check("username").not().isEmpty().withMessage("Username is required."),
		check("password").not().isEmpty().withMessage("Password is required."),
		validateFields,
	],
	loginUser
);

router.get(
	"/google",
	auth.authenticate("auth-google", {
		scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"],
		session: false,
	}),
	loginGoogle
);

router.get(
	"/google/callback",
	auth.authenticate("auth-google", {
		successRedirect: "",
		failureRedirect: "",
	}),
	loginGoogle
);

export default router;
