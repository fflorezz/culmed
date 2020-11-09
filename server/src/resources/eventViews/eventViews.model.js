import { DataTypes, Model } from "sequelize";

import sequelize from "./../../db";
import User from "./../user/user.model";
import Event from "./../event/event.model";

class EventViews extends Model {}

EventViews.init(
  {
    viewerId: {
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
    modelName: "EventViews",
    freezeTableName: true,
  }
);

User.belongsToMany(Event, {
  through: EventViews,
  as: "viewedEvents",
  foreignKey: "viewerId",
  otherKey: "eventId",
});
Event.belongsToMany(User, {
  through: EventViews,
  as: "views",
  foreignKey: "eventId",
  otherKey: "viewerId",
});

// EventViews.sync().then(() => {
//   console.log("EventViews SYNC");
// });

export default EventViews;
