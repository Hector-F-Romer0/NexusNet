import express from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";
import {
	createKeyWord,
	deleteKeyWord,
	getKeyWord,
	getKeyWords,
	updateKeyWord,
} from "../controllers/keywords.controller.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], getKeyWord);
router.get("/", getKeyWords);
router.post("/", [check("label", "Label is required.").not().isEmpty(), validarCampos], createKeyWord);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("label", "Label is required.").not().isEmpty(), validarCampos],
	updateKeyWord
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], deleteKeyWord);

export default router;
