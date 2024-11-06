import { Sequelize } from "sequelize";
import { envs } from "../../config/envs";

export const sequelize = new Sequelize(envs.MYSQL_DB_NAME, envs.MYSQL_DB_USER, envs.MYSQL_DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

