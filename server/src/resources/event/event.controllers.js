import connection from "./../../db";

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
  const eventObject = req.body.event;
  const QUERY = "INSERT INTO Event SET ?";

  if (!eventObject) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  connection.query(QUERY, eventObject, (err, results) => {
    console.log("reults:", results);
    if (err) {
      return res.status(500).send({ Error: err.message }).end();
    }
    res.status(201).send({ data: eventObject });
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
  const eventId = req.params.id;
  const updatedEvent = req.body.event;
  const QUERY = `UPDATE Event SET ? WHERE id = "${eventId}"`;

  if (!updatedEvent) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  connection.query(QUERY, updatedEvent, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }
    if (results.affectedRows) {
      return res.send({ data: updatedEvent });
    } else {
      return res.status(404).send({ message: "Couldn't find event" });
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
