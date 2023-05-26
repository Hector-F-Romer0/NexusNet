import express from "express";

import { createCase, getCases } from "../controllers/cases.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";
import { validateFields } from "../middlewares/validar-campos.js";

const router = express.Router();

router.get("/", [validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getCases);
router.post("/", [validateJWT, hasRoles(USER_ROLES.ADMIN, USER_ROLES.CLIENT), validateFields], createCase);

export default router;
