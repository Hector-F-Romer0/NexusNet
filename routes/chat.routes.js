import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { createChat, deleteChat, getChat, getChats, updateChat } from "../controllers/chat.controller.js";
import { hasRoles } from "../middlewares/validate-role.js";
import { USER_ROLES } from "../models/user.model.js";

const router = express.Router();
router.use(validateJWT);

router.get("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getChats);
router.get("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], getChat);
router.post("/", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], createChat);
router.put("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], updateChat);
router.delete("/:id", [hasRoles([USER_ROLES.ADMIN, USER_ROLES.CLIENT, USER_ROLES.PROVIDER])], deleteChat);

export default router;
