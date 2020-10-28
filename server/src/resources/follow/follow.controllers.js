import Follow from "./follow.model";
import User from "./../user/user.model";

export const getFollowersAndFollowings = async (req, res) => {
  const userId = req.params.userId;
  try {
    const results = await User.findOne({
      where: {
        id: userId,
      },
      attributes: [],
      include: [
        {
          model: User,
          as: "following",
          attributes: ["id", "userName", "avatarImg"],
          through: {
            attributes: [],
          },
        },
        {
          model: User,
          as: "followers",
          attributes: ["id", "userName", "avatarImg"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!results) {
      return res.status(404).send({ message: "Couldn't find user" });
    }
    const { following, followers } = results;
    res.send({
      data: { following, followers },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};

export const follow = async (req, res) => {
  const { followingId } = req.params;
  const userId = req.user.id;
  try {
    const followed = await User.findOne({
      where: {
        id: followingId,
      },
      attributes: ["id", "userName", "avatarImg"],
    });
    if (!followed) {
      return res.status(404).send({ message: "Couldn't find user" });
    }
    await Follow.create({
      followerId: userId,
      followedId: followingId,
    });
    res.send({ data: followed });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};

export const unfollow = async (req, res) => {
  const { followingId } = req.params;
  const userId = req.user.id;
  try {
    const followed = await User.findOne({
      where: {
        id: followingId,
      },
      attributes: ["id", "userName", "avatarImg"],
    });
    if (!followed) {
      return res.status(404).send({ message: "Couldn't find user" });
    }
    await Follow.destroy({
      where: {
        followerId: userId,
        followedId: followingId,
      },
    });
    res.send({ data: { id: followingId } });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};
