import express from "express";

import {
	createCase,
	deleteCase,
	getCase,
	getCases,
	getCasesAvailableForProviders,
	getCasesNotCompletedUser,
	getCasesTakingByProvider,
	getCasesUser,
	updateCase,
	updateLeaveCase,
	updateTakeCase,
} from "../controllers/cases.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { checkSchema } from "express-validator";

const router = express.Router();
router.use(validateJWT);

router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getCases);
router.get("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getCase);
router.get("/search/mycases", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])], getCasesUser);
router.get("/search/availables", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.PROVIDER])], getCasesAvailableForProviders);
router.get("/search/taken", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.PROVIDER])], getCasesTakingByProvider);
router.get("/search/mycasesnotcompleted", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getCasesNotCompletedUser);
router.post("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT]), validateFields], createCase);
router.put("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])], updateCase);
router.put("/update/leave", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.PROVIDER])], updateLeaveCase);
router.put("/update/take", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.PROVIDER])], updateTakeCase);
router.delete("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])], deleteCase);

export default router;
