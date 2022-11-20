import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import fileUpload from "express-fileupload";
import { cors } from "./headers";
import { config } from "../config";
import { routes } from "../routes";
import methodOverride from "method-override";
import flash from "express-flash";
import passport from "passport";


export let client;

export default async () => {
  const app = express();

  app.set("view engine", "ejs");
  app.use(fileUpload());
  app.use(cors);
  app.use(cookieParser(config.serverName + ".ckp"));
  app.use(morgan("dev"));
  app.use(methodOverride("_method"));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));


  app.use(express.static("uploads"));
  app.use(
    session({
      secret           : config.sessionSecret,
      resave           : true,
      saveUninitialized: true,
      cookie           : { maxAge: 5400000 }, // 1.5 hours
    }),
  );
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);

  app.all("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  return { app };
};
