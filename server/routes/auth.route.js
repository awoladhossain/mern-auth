import express from "express";
import { google, signout, singin, singup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/singup", singup);
router.post("/singin", singin);
router.post("/google", google);
router.get("/signout",signout)

export default router;
