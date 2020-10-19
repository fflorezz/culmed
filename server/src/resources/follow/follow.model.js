import { DataTypes, Model } from "sequelize";

import sequelize from "./../../db";
import User from "./../user/user.model";

class Follow extends Model {}

Follow.init(
  {
    followerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    followedId: {
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
    modelName: "Follow",
    freezeTableName: true,
  }
);

User.belongsToMany(User, {
  through: Follow,
  as: "followers",
  foreignKey: "followedId",
  otherKey: "followerId",
});

User.belongsToMany(User, {
  through: Follow,
  as: "following",
  foreignKey: "followerId",
  otherKey: "followedId",
});

export default Follow;

// Follow.sync({ force: true }).then(() => {
//   console.log("Follow sync");
// });
