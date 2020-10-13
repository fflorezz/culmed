import connection from "./../../db";
import { validationResult } from "express-validator";

import Event from "./event.model";

export const getAllEvents = (req, res) => {
  Event.getAll((err, data) => {
    if (err) {
      return res.status(500).send({ Error: err.message }).end();
    }
    res.send({ data });
  });
};

export const createEvent = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }

  const event = new Event(req.body);

  // PENDING: VALIDATE USER

  Event.create(event, (err, data) => {
    if (err) {
      return res.status(409).send({ Error: err.message }).end();
    } else {
      res.status(201).send({ data });
    }
  });
};

export const getEvent = (req, res) => {
  const eventId = req.params.id;

  Event.findById(eventId, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        return res.status(404).send({ message: "Couldn't find event" });
      } else {
        return res.status(500).send({
          message: `Error retrieving Event with id ${eventId}`,
        });
      }
    }
    res.send({ data });
  });
};

export const updateEvent = (req, res) => {
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

export const deleteEvent = (req, res) => {
  const eventId = req.params.id;

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
