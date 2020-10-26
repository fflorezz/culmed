import Sequelize from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
