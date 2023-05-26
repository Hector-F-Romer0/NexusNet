import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { createRole, deleteRole, getRole, getRoles, updateRole } from "../controllers/role.controler.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], getRole);
router.get("/", getRoles);
router.post("/", [check("role", "Role is required.").not().isEmpty(), validateFields], createRole);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("role", "Role is required.").not().isEmpty(), validateFields],
	updateRole
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], deleteRole);

export default router;
