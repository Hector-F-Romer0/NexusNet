import express from "express";

import { createProvider, getProvider } from "../controllers/provider.controller.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { check, checkSchema } from "express-validator";
import { createProviderValidation } from "../validations/provider.validations.js";

const router = express.Router();

router.get("/:id", getProvider);
//
// check("keywords", "The provider has to have keywords").not().isEmpty()
// router.post("/", createProvider);
router.post("/", [checkSchema(createProviderValidation), validateFields], createProvider);

export default router;
