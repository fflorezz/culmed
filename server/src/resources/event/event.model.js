import { DataTypes, Model } from "sequelize";

import sequelize from "./../../db";
import User from "./../user/user.model";

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
      type: DataTypes.INTEGER,
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

// `sequelize.define` also returns the model
//console.log(Event === sequelize.models.Event); // true

// Event.sync().then((rej, res) => {
//   console.log("The table for the Event model was just (re)created!");
// });

export default Event;
