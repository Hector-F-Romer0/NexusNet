import express from "express";
import { check } from "express-validator";

import {
	createService,
	deleteService,
	getService,
	getServices,
	updateService,
} from "../controllers/service.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], getService);
router.get("/", getServices);
router.post("/", [check("label", "Label is required.").not().isEmpty(), validarCampos], createService);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("label", "Label is required.").not().isEmpty(), validarCampos],
	updateService
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validarCampos], deleteService);

export default router;
