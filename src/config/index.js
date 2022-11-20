import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  port      : process.env.PORT || 3000,
  serverName: "project",
  mongoURI  : process.env.MONGO_URI || "mongodb://localhost:27017/project",
};
