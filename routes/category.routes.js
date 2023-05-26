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
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();

// All endpoints will use validateJWT
router.use(validateJWT);

router.get(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]),
		check("id", "Invalid id.").not().isEmpty().bail().isMongoId(),
		validateFields,
	],
	getCategory
);
router.get("/", hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]), getCategories);
router.post(
	"/",
	[hasRoles(USER_ROLES.ADMIN), check("label", "Label is required.").not().isEmpty(), validateFields],
	createCategory
);
router.put(
	"/:id",
	[
		hasRoles(USER_ROLES.ADMIN),
		check("id", "Invalid id.").not().isEmpty().isMongoId(),
		check("label", "Label is required.").not().isEmpty(),
		validateFields,
	],
	updateCategory
);
router.delete(
	"/:id",
	[hasRoles(USER_ROLES.ADMIN), check("id", "Invalid id.").not().isEmpty().isMongoId(), validateFields],
	deleteCategory
);

export default router;
