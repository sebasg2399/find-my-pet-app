import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller.js";

export const auth_router = Router();

auth_router.post("/login", signin);
auth_router.post("/signup", signup);
