import Calendar from "./calendar.model";
import User from "./../user/user.model";
import Event from "./../event/event.model";
import sequelize from "./../../db";

export const getByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "Couldn't find user" });
    }
    const { calendarEvents } = await User.findOne({
      where: { id: userId },
      group: ["calendarEvents.id"],
      include: {
        model: Event,
        as: "calendarEvents",
        attributes: [
          "id",
          "title",
          "startDate",
          "endDate",
          "location",
          "description",
          "location",
          "category",
          "eventImg",
          "authorId",
          [
            sequelize.fn(
              "COUNT",
              sequelize.col("calendarEvents.participants.id")
            ),
            "participantsCount",
          ],
        ],
        include: [
          {
            model: User,
            attributes: ["userName", "avatarImg"],
          },
          {
            model: User,
            as: "participants",
            attributes: [],
          },
        ],
        through: {
          attributes: [],
        },
      },
    });
    res.send({ data: calendarEvents });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const addEvent = async (req, res) => {
  const { eventId } = req.params;
  const userId = req.user.id;
  try {
    const event = await Event.findOne({
      where: {
        id: eventId,
      },
      include: {
        model: User,
        attributes: ["userName", "avatarImg"],
      },
    });
    if (!event) {
      return res.status(404).send({ message: "Couldn't find event" });
    }
    await Calendar.create({ userId, eventId });
    res.send({ data: event });
  } catch (err) {
    console.log(err);
    if (err.errors && err.errors[0].type === "unique violation") {
      return res.status(400).send({ message: "Event added already" });
    }
    res.status(500).send({
      message: "Something went wrong, Try again later",
    });
  }
};

export const removeEvent = async (req, res) => {
  const { eventId } = req.params;
  const userId = req.user.id;
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
    res.send({ data: { id: parseInt(eventId) } });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err || "Something went wrong, Try again later",
    });
  }
};
