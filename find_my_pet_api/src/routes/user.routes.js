import { Router } from "express";
import {
  getReports,
  getPets,
  registerPet,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.jwt.js";

export const user_router = Router();

user_router.post("/mypets/", verifyToken, registerPet);
user_router.get("/mypets/", verifyToken, getPets);

user_router.get("/myreports/", verifyToken, getReports);
