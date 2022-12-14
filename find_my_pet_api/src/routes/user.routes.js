import { Router } from "express";
import {
  getReports,
  getPets,
  registerPet,
  removePet,
  updatePet,
  registerReport,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.jwt.js";

export const user_router = Router();

user_router.get("/profile",verifyToken, getUser);

user_router.post("/mypets/", verifyToken, registerPet);
user_router.get("/mypets/", verifyToken, getPets);
user_router.delete("/mypets/:pet_id", verifyToken, removePet);
user_router.patch("/mypets/:pet_id", verifyToken, updatePet);
user_router.post("/mypets/createreport/:pet_id", verifyToken, registerReport);

user_router.get("/myreports/", verifyToken, getReports);
