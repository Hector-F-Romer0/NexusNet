import express from "express";

import { createProvider, getProvider } from "../controllers/provider.controller.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { check, checkSchema } from "express-validator";
import { createProviderValidation } from "../validations/provider.validations.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();

router.use(validateJWT);

router.get("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getProvider);

//
// check("keywords", "The provider has to have keywords").not().isEmpty()
// router.post("/", createProvider);
router.post("/", [checkSchema(createProviderValidation), validateFields], createProvider);

export default router;
