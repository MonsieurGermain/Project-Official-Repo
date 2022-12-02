import * as dotenv from "dotenv";

// Load environment variables from .env file, where API keys and passwords are configured
// So you can have different .env files for different environments
// ignore .env file from git later when you deploy to different environments

dotenv.config();

export const config = {
  port         : process.env.PORT || 3001,
  serverName   : "escrow",
  mongoURI     : process.env.MONGO_URI || "mongodb://mongo:27017/escrow",
  sessionSecret: process.env.SESSION_SECRET || "secret",
};
