import { DataTypes, Model } from "sequelize";

import sequelize from "./../../db";
import User from "../user/user.model";

class Event extends Model {}

Event.init(
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
    },
    price: {
      type: DataTypes.FLOAT,
    },
    eventImg: {
      type: DataTypes.STRING,
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Event",
    freezeTableName: true,
  }
);

export default Event;
