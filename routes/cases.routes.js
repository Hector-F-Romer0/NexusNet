import express from "express";

import { createCase, getCases } from "../controllers/cases.controller.js";

const router = express.Router();

router.get("/", getCases);
router.post("/", createCase);

export default router;
