import express from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";
import {
	createCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], getCategory);
router.get("/", getCategories);
router.post("/", [check("label", "Label is required.").not().isEmpty(), validarCampos], createCategory);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("label", "Label is required.").not().isEmpty(), validarCampos],
	updateCategory
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], deleteCategory);

export default router;
