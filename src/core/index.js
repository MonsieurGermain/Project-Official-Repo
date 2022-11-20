import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import fileUpload from "express-fileupload";
import { cors } from "./headers";
import { config } from "../config";
import routes from "../routes";

export let client;

export default async () => {
  const app = express();

  app.use(fileUpload());
  app.use(cors);
  app.use(cookieParser(config.serverName + ".ckp"));
  app.use(morgan("dev"));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static("uploads"));
  app.use(
    session({
      name  : config.serverName + ".sid",
      secret: config.serverName + ".scr",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
      },
      resave           : true,
      saveUninitialized: true
    })
  );

  app.use(routes);

  app.use((req, res, next, error) => {

  });

  return { app };
};
