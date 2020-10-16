import { DataTypes, Model } from "sequelize";

import sequelize from "./../../db";
import User from "./../user/user.model";
import Event from "./../event/event.model";

class Calendar extends Model {}

Calendar.init(
  {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Event,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Calendar",
    freezeTableName: true,
  }
);

User.belongsToMany(Event, { through: Calendar, foreignKey: "userId" });
Event.belongsToMany(User, { through: Calendar, foreignKey: "eventId" });

export default Calendar;
