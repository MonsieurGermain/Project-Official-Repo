import { Server } from "http";
import { config } from "./config";
import core from "./core";
import { connectDB } from "./libs/mongoose";

const main = async () => {
  await connectDB();
  const { app } = await core();
  const server = Server(app);

  server.listen(config.port, async () => {
    console.log(`Server: ${config.port} is listening ...`);
  });
};

try {
  main();
} catch (error) {
  console.log(error);
  process.exit(1);
}
