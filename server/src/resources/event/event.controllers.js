import connection from "./../../db";
import { validationResult } from "express-validator";

import Event from "./event.model";

export const getAllEvents = (req, res) => {
  const QUERY = "SELECT * FROM Event";

  connection.query(QUERY, (err, results) => {
    if (err) {
      return res.status(500).send({ Error: err.message }).end();
    }
    res.send({ data: results });
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
  const QUERY = `SELECT * FROM Event WHERE id = "${eventId}"`;

  connection.query(QUERY, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }
    if (results && results.length == 0) {
      return res.status(404).send({ message: "Couldn't find event" });
    }
    res.send({ data: results });
  });
};

export const updateEvent = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }

  const eventId = req.params.id;

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
  const QUERY = `DELETE FROM Event WHERE id = "${eventId}"`;

  connection.query(QUERY, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }
    if (results.affectedRows) {
      return res.status(200).end();
    } else {
      return res.status(404).send({ message: "Couldn't find event" });
    }
  });
};
