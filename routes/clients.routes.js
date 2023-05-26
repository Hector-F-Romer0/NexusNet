import express from "express";

import { createClient, getClient } from "../controllers/clients.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();
router.use(validateJWT);

router.get("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getClient);
router.post("/", createClient);

export default router;
