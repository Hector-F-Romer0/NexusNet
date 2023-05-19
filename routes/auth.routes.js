import express from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";
import { loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post(
	"/login",
	[
		check("username").not().isEmpty().withMessage("Username is required."),
		check("password").not().isEmpty().withMessage("Password is required."),
		validarCampos,
	],
	loginUser
);

export default router;
