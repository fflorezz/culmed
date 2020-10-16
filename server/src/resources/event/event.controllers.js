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
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
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

  try {
    const event = await Event.create({
      title,
      startDate,
      endDate,
      location,
      description,
      category,
      price,
      eventImg,
      authorId,
    });
    if (event) {
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
  const eventId = req.params.id;
  try {
    const event = await Event.findAll({
      where: {
        id: eventId,
      },
      include: {
        model: User,
        attributes: ["userName", "avatarImg"],
      },
    });
    if (!event.length) {
      return res.status(404).send({ message: "Couldn't find event" });
    }
    res.send({ data: event[0] });
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
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }

  const eventId = req.params.id;

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

  try {
    const updatedPlace = await Event.update(
      {
        title,
        startDate,
        endDate,
        location,
        description,
        category,
        price,
        eventImg,
        authorId,
      },
      {
        where: {
          id: eventId,
        },
      }
    );
    if (updatedPlace[0] === 0) {
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

export const remove = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }

  const eventId = req.params.id;

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
