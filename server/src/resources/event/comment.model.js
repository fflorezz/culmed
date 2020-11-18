import { DataTypes, Model } from "sequelize";
import sequelize from "../../db";

import User from "../user/user.model";
import Event from "./event.model";

class Comment extends Model {}

Comment.init(
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
    text: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  { sequelize, modelName: "Comment", freezeTableName: true }
);

Comment.belongsTo(User);
User.hasMany(Comment, {
  foreignKey: "userId",
});

Comment.belongsTo(Event);
Event.hasMany(Comment, { foreignKey: "eventId" });

export default Comment;
