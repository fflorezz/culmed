import { validationResult } from "express-validator";
import fs from "fs-extra";

import cloudinary from "./../../middlewares/cloudinary";

import Event from "./event.model";
import User from "./../user/user.model";
import Comment from "./comment.model";
import EventViews from "./../eventViews/eventViews.model";
import sequelize from "./../../db";

const SELECT_VIEWS =
  "(SELECT COUNT(*) FROM eventViews WHERE event.id = eventId)";
const SELECT_PARTICIPANTS =
  "(SELECT COUNT(*) FROM calendar WHERE event.id = eventId)";

export const getAll = async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: {
        include: [
          [sequelize.literal(SELECT_VIEWS), "viewsCount"],
          [sequelize.literal(SELECT_PARTICIPANTS), "participantsCount"],
        ],
      },
      include: [
        {
          model: User,
          attributes: ["userName", "avatarImg"],
        },
      ],
    });
    res.send({ data: events });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() }).end();
  }

  const {
    title,
    startDate,
    endDate,
    location,
    description,
    category,
    price,
  } = req.body;

  const userId = req.user.id;

  try {
    let image;
    if (req.file) {
      image = await cloudinary.uploader.upload(req.file.path, {
        width: 800,
      });
    }
    const createdEvent = await Event.create({
      title,
      startDate,
      endDate: endDate || null,
      location,
      description,
      category: category || null,
      price: price || null,
      eventImg: image ? image.url : null,
      authorId: userId,
    });
    if (createdEvent) {
      if (image) {
        await fs.unlink(req.file.path);
      }
      const event = await Event.findOne({
        where: {
          id: createdEvent.id,
        },
        include: {
          model: User,
          attributes: ["userName", "avatarImg"],
        },
      });
      res.status(201).send({ data: event });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const getById = async (req, res) => {
  const eventId = req.params.eventId;
  const userId = req.query.userId;

  try {
    const event = await Event.findOne({
      where: {
        id: eventId,
      },
      attributes: {
        include: [
          [sequelize.literal(SELECT_VIEWS), "viewsCount"],
          [sequelize.literal(SELECT_PARTICIPANTS), "participantsCount"],
        ],
      },
      include: [
        {
          model: User,
          attributes: ["userName", "avatarImg"],
        },
        {
          model: Comment,
          attributes: ["userId", "text", "eventId", "createdAt"],
          include: [
            {
              model: User,
              attributes: ["userName", "avatarImg"],
            },
          ],
        },
      ],
    });
    if (!event) {
      return res.status(404).send({ message: "Couldn't find event" });
    }
    if (userId) {
      const view = await EventViews.findOne({
        where: {
          viewerId: userId,
          eventId: eventId,
        },
      });
      if (!view) {
        await EventViews.create({
          viewerId: userId,
          eventId,
        });
      }
    }
    res.send({ data: event });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const getByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const events = await Event.findAll({
      where: {
        authorId: userId,
      },
      include: {
        model: User,
        attributes: ["userName", "avatarImg"],
      },
    });

    res.send({ data: events });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() }).end();
  }
  const eventId = req.params.eventId;
  const userId = req.user.id;
  const {
    title,
    startDate,
    endDate,
    location,
    description,
    category,
    price,
    eventImg,
  } = req.body;

  try {
    const event = await Event.findByPk(eventId);
    console.log("*****", event);
    if (!event) {
      res.status(404).send({ message: "Couldn't find event" });
    }
    if (event.authorId !== userId) {
      return res
        .status(401)
        .send({ message: "You are not allowed to edit this event" });
    }
    await Event.update(
      {
        title,
        startDate,
        endDate: endDate || null,
        location,
        description,
        category: category || null,
        price: price || null,
        eventImg,
        authorId: userId,
      },
      {
        where: {
          id: eventId,
        },
        returning: true,
      }
    );
    const updatedEvent = await Event.findOne({
      where: {
        id: eventId,
      },
      include: {
        model: User,
        attributes: ["userName", "avatarImg"],
      },
    });
    res.send({ data: updatedEvent });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const remove = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }
  const eventId = req.params.eventId;
  const userId = req.user.id;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res.status(404).send({ message: "Couldn't find event" });
    }
    if (event.authorId !== userId) {
      return res
        .status(401)
        .send({ message: "You are not allowed to delete this event" });
    }
    await Event.destroy({
      where: {
        id: eventId,
      },
    });
    res.status(200).send({ data: { id: event.id } });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};

export const addComment = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() }).end();
  }

  const { eventId } = req.params;
  const { text, userId } = req.body;

  try {
    const comment = await Comment.create({ text, eventId, userId });

    res.status(201).send({ eventId, userId, text, comment });
  } catch (err) {
    console.log(err);
  }
};
