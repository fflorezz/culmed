import Sequelize from "sequelize";

const sequelize = new Sequelize("culmed2", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
