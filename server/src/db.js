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

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("DB sync!");
//   })
//   .catch(err => {
//     console.log(err);
//   });

export default sequelize;
