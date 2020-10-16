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

export const update = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }

  const eventId = req.params.id;

  // PENDING: VALIDATE USER

  Event.updateById(eventId, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found Event with id ${eventId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Event with id ${eventId}`,
        });
      }
    } else {
      res.status(200).send({ data });
    }
  });
};

export const remove = (req, res) => {
  const eventId = req.params.id;

  // PENDING: VALIDATE USER

  Event.remove(eventId, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        return res.status(404).send({ message: "Couldn't find event" });
      }
      return res.status(500).send({ message: err.message });
    }
    return res.status(200).end();
  });
};
