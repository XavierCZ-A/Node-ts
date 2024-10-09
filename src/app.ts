import { envs } from "./config/envs";
import { IndexRoutes } from "./routes/index.routes";
import { Server } from "./server";



(async()=> {
  main();
})();


async function main() {

  const server = new Server({
    port: envs.PORT,
    routes: IndexRoutes.routes,
  });

  server.start();
}