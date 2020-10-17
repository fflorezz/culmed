import Calendar from "./calendar.model";
import User from "./../user/user.model";
import Event from "./../event/event.model";

export const getByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "Couldn't find user" });
    }
    const results = await User.findOne({
      where: { id: userId },
      include: {
        model: Event,
        include: {
          model: User,
          attributes: ["userName", "avatarImg"],
        },
        through: {
          attributes: [],
        },
      },
    });
    res.send({ data: results.Events });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const addEvent = async (req, res) => {
  const { userId, eventId } = req.body;

  // PENDDING: AUTH USER

  try {
    const addedEvent = await Calendar.create({ userId, eventId });
    res.send({ data: addedEvent });
  } catch (err) {
    console.log(err);
    if (err.errors[0].type === "unique violation") {
      return res.status(400).send({ message: "Event added already" });
    }
    res.status(500).send({
      message: err || "Something went wrong, Try again later",
    });
  }
};

export const removeEvent = async (req, res) => {
  const { userId, eventId } = req.body;

  // PENDDING: AUTH USER

  try {
    const removedEvent = await Calendar.destroy({
      where: {
        userId: userId,
        eventId: eventId,
      },
    });
    if (removedEvent === 0) {
      return res.status(404).send({ message: "Couldn't find event" });
    }
    res.send({ data: removedEvent });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err || "Something went wrong, Try again later",
    });
  }
};
