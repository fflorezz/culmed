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

User.belongsToMany(Event, {
  through: Calendar,
  as: "calendarEvents",
  foreignKey: "userId",
  otherKey: "eventId",
});
Event.belongsToMany(User, {
  through: Calendar,
  as: "eventUsers",
  foreignKey: "eventId",
  otherKey: "userId",
});

export default Calendar;
