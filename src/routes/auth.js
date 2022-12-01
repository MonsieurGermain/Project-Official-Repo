import { Router } from "express";
import passport from "passport";
import { loginController } from "../controllers/auth/login";
import { registerController } from "../controllers/auth/register";

const authRoutes = new Router();

const authenticate = passport.authenticate("local", {
  failureFlash   : true,
  failureRedirect: "/login",
  successRedirect: "/dashboard"
})

authRoutes.get("/login", loginController.get);
authRoutes.post("/login", authenticate, loginController.post);

authRoutes.get("/register", registerController.get);
authRoutes.post("/register", authenticate, registerController.post);

export { authRoutes };
