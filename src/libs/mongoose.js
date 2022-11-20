import mongoose from "mongoose";
import { config } from "../config";

const connectDB = async () => {
  const conn = await mongoose.connect(config.mongoURI, {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export { connectDB };
