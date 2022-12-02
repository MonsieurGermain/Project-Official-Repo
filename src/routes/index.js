import { Router } from "express";
import { auth, notAuth } from "../middlewares/auth";

import { authRoutes } from "./auth";
import { homeRoutes } from "./dashboard/home";
import errorRoutes from "./error";


const routes = new Router();
const publicRoutes = new Router(auth());
const privateRoutes = new Router(notAuth());

// Public routes
// you can add public routes here
// publicRoutes.use(auth("/"));
publicRoutes.use(authRoutes);
publicRoutes.use(homeRoutes);
publicRoutes.use(errorRoutes);

// Private routes
// you can add private routes here
privateRoutes.use(notAuth("/login"));
// privateRoutes.use(productRoutes); // some other private routes


/*
  * You can create admin routes like this:

  const adminRoutes = new Router();
  adminRoutes.use(authorizeByAuthorization("ADMIN"));
  adminRoutes.use(dashboardRoutes);


  * Or you can use authorizeByAuthorization middleware in each route like this:

  privateRoutes.get("/dashboard", authorizeByAuthorization("ADMIN"), dashboardController.get); // only ADMIN can access this route
  privateRoutes.get("/orders", authorizeByAuthorization("VENDOR"), orderController.get); // only VENDOR can access this route

  * You can use authorizeByLevel middleware in each route like this:

  privateRoutes.get("/dashboard", authorizeByLevel("VENDOR"), dashboardController.get); // only VENDOR and ADMIN can access this route

  * You can also give a redirectUrl to the middleware like this:

  privateRoutes.get("/dashboard", authorizeByLevel("VENDOR", "/"), dashboardController.get); // only VENDOR and ADMIN can access this route, if not, redirect to home page
*/



routes.use(publicRoutes);
routes.use(privateRoutes);

export { routes };
