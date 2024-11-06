import { envs } from "./config/envs";
import { testConnection } from "./data/mysql/connect";
import { IndexRoutes } from "./routes/index.routes";
import { Server } from "./server";

(async () => {
  main();
})();

async function main() {
  try {
    testConnection();

    // Iniciar el servidor después de que la conexión a la base de datos sea exitosa
    const server = new Server({
      port: envs.PORT,
      routes: IndexRoutes.routes,
    });

    server.start();
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1); // Detener la aplicación
  }
}