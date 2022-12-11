import express from "express";
import { auth_router } from "./routes/auth.routes.js";
import { user_router } from "./routes/user.routes.js";
import cors from "cors"
export const app = express();

app.use(express.json());
app.use(cors())
app.use(auth_router);
app.use(user_router);
