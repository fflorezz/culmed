import { DataTypes, Model } from "sequelize";

import sequelize from "./../../db";

class User extends Model {}

User.init(
  {
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

const newUser = {
  userName: "Mateo Lopez",
  email: "malo@mail.com",
  password: "test123",
  avatarImg:
    "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

User.create(newUser).then(user => {
  console.log(user.toJSON());
});

export default User;
