import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
const router=express.Router();

router.post("/sigin",signup);
router.post("/login",login);

router.post("/logout",logout);

export default router;