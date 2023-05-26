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

const router = express.Router();

router.get("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], getService);
router.get("/", getServices);
router.post("/", [check("label", "Label is required.").not().isEmpty(), validateFields], createService);
router.put(
	"/:id",
	[check("id", "Invalid id.").isMongoId(), check("label", "Label is required.").not().isEmpty(), validateFields],
	updateService
);
router.delete("/:id", [check("id", "Invalid id.").isMongoId(), validateFields], deleteService);

export default router;
