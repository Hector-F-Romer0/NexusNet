import express from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";
import { createRole, deleteRole, getRole, getRoles, updateRole } from "../controllers/role.controler.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], getRole);
router.get("/", getRoles);
router.post("/", [check("role", "Role is required.").not().isEmpty(), validarCampos], createRole);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("role", "Role is required.").not().isEmpty(), validarCampos],
	updateRole
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], deleteRole);

export default router;
