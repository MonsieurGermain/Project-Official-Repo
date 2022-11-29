import { Router } from "express";
import passport from "passport";
import { loginController } from "../controllers/auth/login";

const authRoutes = new Router();

authRoutes.get("/login", loginController.get);
authRoutes.post(
  "/login",
  passport.authenticate("local", {
    failureFlash   : true,
    failureRedirect: "/login",
    successRedirect: "/dashboard"
  }),
  loginController.post
);

export { authRoutes };
