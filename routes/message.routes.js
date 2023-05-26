import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { getMessage, getMessages, createMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], getMessage);
router.get("/", getMessages);
router.post(
	"/",
	[
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
