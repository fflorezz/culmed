import { Sequelize, DataTypes, Model } from "sequelize";

import sequelize from "./../../db";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(75),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    avatarImg: {
      type: DataTypes.STRING(512),
    },
  },
  {
    sequelize,
    modelName: "User",
    freezeTableName: true,
  }
);

// User.sync().then((rej, res) => {
//   console.log("The table for the User model was just (re)created!");
// });

// const users = [
//   {
//     userName: "Lili_dev",
//     email: "lilianasan@mail.com",
//     password: "test123",
//     avatarImg:
//       "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
//   {
//     userName: "Eduardo1975",
//     email: "eduardo@mail.com",
//     password: "test123",
//     avatarImg:
//       "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
//   {
//     userName: "Mateo Lopez",
//     email: "malo@mail.com",
//     password: "test123",
//     avatarImg:
//       "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
// ];

// User.create(users[2]).then(user => {
//   console.log(user.toJSON());
// });

// User.destroy({
//   where: {
//     userName: "Armando Gonzales",
//   },
// }).then(data => {
//   console.log(data);
// });

export default User;
