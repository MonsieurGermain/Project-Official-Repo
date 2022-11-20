import { Server } from "http";
import config from "./config";
import core from "./core";

const main = async () => {
  const { app } = await core();
  const server = Server(app);

  server.listen(config.server.port, async () => {
    console.log(`Server: ${config.server.port} is listening ...`);
  });
};

main();
