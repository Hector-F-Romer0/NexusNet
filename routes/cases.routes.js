import express from "express";

import { createCase, deleteCase, getCase, getCases, getCasesUser, updateCase } from "../controllers/cases.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { checkSchema } from "express-validator";

const router = express.Router();
router.use(validateJWT);

router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getCases);
router.get("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getCase);
router.get("/search/mycases",[hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])],getCasesUser)
router.post("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT]), validateFields], createCase);
router.put("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])], updateCase);
router.delete("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT])], deleteCase);

export default router;
