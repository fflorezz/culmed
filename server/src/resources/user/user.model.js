import { Sequelize, DataTypes, Model } from "sequelize";

import sequelize from "./../../db";
import Event from "./../event/event.model";

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

User.hasMany(Event, {
  foreignKey: "authorId",
});
Event.belongsTo(User, {
  foreignKey: "authorId",
});

export default User;
