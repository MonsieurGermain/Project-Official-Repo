import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  port         : process.env.PORT || 3001,
  serverName   : "escrow",
  mongoURI     : process.env.MONGO_URI || "mongodb://localhost:27017/escrow",
  sessionSecret: process.env.SESSION_SECRET || "secret",
};
