import express from "express";
import { check } from "express-validator";

import {
	createService,
	deleteService,
	getService,
	getServices,
	updateService,
} from "../controllers/service.controller.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = express.Router();
router.use(validateJWT);

router.get(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]),
		check("id", "Invalid id.").isMongoId(),
		validateFields,
	],
	getService
);
router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getServices);
router.post(
	"/",
	[hasRoles([USER_ROLES.ADMIN]), check("label", "Label is required.").not().isEmpty(), validateFields],
	createService
);
router.put(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN]),
		check("id", "Invalid id.").isMongoId(),
		check("label", "Label is required.").not().isEmpty(),
		validateFields,
	],
	updateService
);
router.delete(
	"/:id",
	[hasRoles([USER_ROLES.ADMIN]), check("id", "Invalid id.").isMongoId(), validateFields],
	deleteService
);

export default router;
