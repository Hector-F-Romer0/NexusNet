import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { getMessage, getMessages, createMessage } from "../controllers/message.controller.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();

router.get(
	"/:id",
	[
		hasRoles(USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER),
		check("id", "Invalid id.").isMongoId(),
		validateFields,
	],
	getMessage
);
router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getMessages);
router.post(
	"/",
	[
		hasRoles(USER_ROLES.ADMIN),
		check("message", "Message is required.").not().isEmpty(),
		check("sender", "Sender id is required").not().isEmpty().isMongoId(),
		validateFields,
	],
	createMessage
);
// router.put(
// 	"/:id",
// 	[check("id", "Invalid id.").isMongoId(), check("role", "Role is required.").not().isEmpty(), validarCampos],
// 	updateRole
// );
// router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], deleteRole);

export default router;
