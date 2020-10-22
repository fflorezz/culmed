import { validationResult } from "express-validator";

import Event from "./event.model";
import User from "./../user/user.model";

export const getAll = async (req, res) => {
  try {
    const events = await Event.findAll({
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
    eventImg,
    authorId,
  } = req.body;

  // PENDING: VALIDATE USER
  console.log("*** ENDDate", endDate);

  try {
    const createdEvent = await Event.create({
      title,
      startDate,
      endDate: endDate || null,
      location,
      description,
      category: category || null,
      price: price || null,
      eventImg,
      authorId,
    });
    if (createdEvent) {
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

  // PENDING: VALIDATE USER

  try {
    const results = await Event.update(
      {
        title,
        startDate,
        endDate,
        location,
        description,
        category,
        price,
        eventImg,
      },
      {
        where: {
          id: eventId,
        },
        returning: true,
      }
    );
    if (results[0] === 0) {
      res.status(404).send({ message: "Couldn't find event" });
    }
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

  // PENDING: VALIDATE USER

  try {
    const deletedPlace = await Event.destroy({
      where: {
        id: eventId,
      },
    });
    console.log(deletedPlace);
    if (deletedPlace === 0) {
      res.status(404).send({ message: "Couldn't find event" });
    }
    res.send({ data: { id: eventId } });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};
