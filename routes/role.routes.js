import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { createRole, deleteRole, getRole, getRoles, updateRole } from "../controllers/role.controler.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();
router.use(validateJWT);

router.get(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]),
		check("id", "Invalid id.").isMongoId(),
		validateFields,
	],
	getRole
);
router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getRoles);
router.post(
	"/",
	[hasRoles([USER_ROLES.ADMIN]), check("role", "Role is required.").not().isEmpty(), validateFields],
	createRole
);
router.put(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN]),
		check("id", "Invalid id.").isMongoId(),
		check("role", "Role is required.").not().isEmpty(),
		validateFields,
	],
	updateRole
);
router.delete(
	"/:id",
	[hasRoles([USER_ROLES.ADMIN]), check("id", "Invalid id.").isMongoId(), validateFields],
	deleteRole
);

export default router;
