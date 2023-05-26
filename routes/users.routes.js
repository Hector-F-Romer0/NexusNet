import express from "express";

import { getUser, getUsers, getUsersWithoutLogged } from "../controllers/users.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { validateFields } from "../middlewares/validar-campos.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();

router.get("/", [validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT]), validateFields], getUsers);
router.get("/:id", getUser);
// router.get("/withoutme", [validateJWT], getUsersWithoutLogged);
router.get(
	"/search/withoutme",
	[validateJWT, hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])],
	getUsersWithoutLogged
);

export default router;
