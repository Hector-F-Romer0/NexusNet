import express from "express";
import { check } from "express-validator";

import { validateFields } from "../middlewares/validar-campos.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { createChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", [validateJWT], createChat);

export default router;
