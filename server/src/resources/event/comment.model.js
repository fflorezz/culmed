import { DataTypes, Model } from "sequelize";
import sequelize from "../../db";

import User from "../user/user.model";
import Event from "./event.model";

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  { sequelize, modelName: "Comment", freezeTableName: true }
);

Comment.belongsTo(User);
User.hasMany(Comment);

Comment.belongsTo(Event, { onDelete: "cascade", hooks: true });
Event.hasMany(Comment, { onDelete: "cascade", hooks: true });

// Comment.drop()
//   .then(() => {
//     console.log("drop***************");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Comment.sync()
//   .then(() => {
//     console.log("sync***************");
//   })
//   .catch(err => {
//     console.log(err);
//   });

export default Comment;
