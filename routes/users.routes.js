import express from "express";

import { getUser, getUsers, getUsersWithoutLogged } from "../controllers/users.controller.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
// router.get("/withoutme", [validateJWT], getUsersWithoutLogged);
router.get("/search/withoutme", [validateJWT], getUsersWithoutLogged);

export default router;
