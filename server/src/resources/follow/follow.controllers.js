import Follow from "./follow.model";
import User from "./../user/user.model";

export const getFollows = async (req, res) => {
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
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};
