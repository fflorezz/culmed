import Follow from "./follow.model";
import User from "./../user/user.model";
import sequelize from "./../../db";

export const getFollows = async (req, res) => {
  const userId = req.params.userId;
  try {
    const { following } = await User.findOne({
      where: {
        id: userId,
      },
      attributes: [],
      include: {
        model: User,
        as: "following",
        attributes: ["id", "userName", "avatarImg"],
        through: {
          attributes: [],
        },
      },
    });
    const { followers } = await User.findOne({
      where: {
        id: userId,
      },
      attributes: [],
      include: {
        model: User,
        as: "followers",
        attributes: ["id", "userName", "avatarImg"],
        through: {
          attributes: [],
        },
      },
    });
    res.send({
      data: { following, followers },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export const addFollow = async (req, res) => {
  const { followerId, followedId } = req.body;
  try {
    const followed = await User.findOne({
      where: {
        id: followedId,
      },
      attributes: ["id", "userName", "avatarImg"],
    });
    if (!followed) {
      return res.status(404).send({ message: "Couldn't find user" });
    }
    await Follow.create({
      followerId,
      followedId,
    });
    res.send({ data: followed });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};
