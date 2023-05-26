import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post(
	"/login",
	[
		check("username").not().isEmpty().withMessage("Username is required."),
		check("password").not().isEmpty().withMessage("Password is required."),
		validateFields,
	],
	loginUser
);

export default router;
