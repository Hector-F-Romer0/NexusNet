import express from "express";

import {
	createProvider,
	getProvider,
	getProviders,
	getProvidersApproved,
	getProvidersNotApproved,
	updateProvider,
	updateRateProvider,
} from "../controllers/provider.controller.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { check, checkSchema } from "express-validator";
import { createProviderValidation } from "../validations/user.validations.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();

// router.use();

router.get("/:id", [validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getProvider);
router.get("/", [validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getProviders);
router.get(
	"/not/approved",
	[validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])],
	getProvidersNotApproved
);
router.get(
	"/all/approved",
	[validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])],
	getProvidersApproved
);

//
// check("keywords", "The provider has to have keywords").not().isEmpty()
// router.post("/", createProvider);
router.post("/", [checkSchema(createProviderValidation), validateFields], createProvider);
router.post("/rate/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])], updateRateProvider);

export default router;
