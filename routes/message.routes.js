import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import {
	getMessage,
	getMessages,
	createMessage,
	updateMessage,
	deleteMessage,
} from "../controllers/message.controller.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = express.Router();
router.use(validateJWT);

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
		hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]),
		check("message", "Message is required.").not().isEmpty(),
		check("sender", "Sender id is required").not().isEmpty().isMongoId(),
		validateFields,
	],
	createMessage
);
router.put(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]),
		check("message", "Message is required.").not().isEmpty(),
		validateFields,
	],
	updateMessage
);
router.delete(
	"/:id",
	[
		hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER]),
		check("id", "Invalid id.").not().isEmpty().isMongoId(),
		validateFields,
	],
	deleteMessage
);

export default router;
