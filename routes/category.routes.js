import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import {
	createCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory,
} from "../controllers/category.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], getCategory);
router.get("/", [validateJWT], getCategories);
router.post("/", [check("label", "Label is required.").not().isEmpty(), validateFields], createCategory);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("label", "Label is required.").not().isEmpty(), validateFields],
	updateCategory
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], deleteCategory);

export default router;
