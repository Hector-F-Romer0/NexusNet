import express from "express";

import { createClient, getClient } from "../controllers/clients.controller.js";

const router = express.Router();

router.get("/:id", getClient);
router.post("/", createClient);

export default router;
