import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import {
	createKeyWord,
	deleteKeyWord,
	getKeyWord,
	getKeyWords,
	updateKeyWord,
} from "../controllers/keywords.controller.js";
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
	getKeyWord
);
router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getKeyWords);
router.post(
	"/",
	[hasRoles([USER_ROLES.ADMIN]), check("label", "Label is required.").not().isEmpty(), validateFields],
	createKeyWord
);
router.put(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN]),
		check("id", "Invalid id.").isMongoId(),
		check("label", "Label is required.").not().isEmpty(),
		validateFields,
	],
	updateKeyWord
);
router.delete(
	"/:id",
	[hasRoles([USER_ROLES.ADMIN]), check("id", "Invalid id.").isMongoId(), validateFields],
	deleteKeyWord
);

export default router;
