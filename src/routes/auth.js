import { Router } from "express";
import { loginController } from "../controllers/auth/login";

const authRoutes = new Router();

authRoutes.get("/login", loginController.get);
authRoutes.post("/login", loginController.post);

export {
  authRoutes
};