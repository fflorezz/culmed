import { v4 as uuid4 } from "uuid";

import connection from "./../../db";

const Event = function ({
  title,
  startDate,
  endDate,
  location,
  description,
  category,
  price,
  eventImg,
  authorId,
}) {
  this.id = uuid4();
  this.title = title;
  this.startDate = startDate;
  this.endDate = endDate;
  this.location = location;
  this.description = description;
  this.category = category;
  this.price = price;
  this.eventImg = eventImg;
  this.authorId = authorId;
};

Event.create = (newEvent, callback) => {
  const QUERY = "INSERT INTO Event SET ?";

  connection.query(QUERY, newEvent, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, { affectedRows: results.affectedRows, ...newEvent });
  });
};

Event.updateById = (id, event, callback) => {
  const QUERY = "UPDATE Event SET ? WHERE id = ?";

  const updatedEvent = {
    title: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location,
    description: event.description,
    category: event.category,
    price: event.price,
    eventImg: event.eventImg,
    authorId: event.authorId,
  };

  connection.query(QUERY, [updatedEvent, id], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.affectedRows == 0) {
      callback({ kind: "not found" }, null);
      return;
    }
    callback(null, {
      affectedRows: results.affectedRows,
      id,
      ...updatedEvent,
    });
  });
};

Event.getAll = callback => {
  const QUERY = "SELECT * FROM Event";

  connection.query(QUERY, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    } else {
      callback(null, results);
    }
  });
};

Event.findById = (id, callback) => {
  const QUERY = "SELECT * FROM Event WHERE id = ?";

  connection.query(QUERY, id, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.length) {
      callback(null, results[0]);
      return;
    }
    callback({ kind: "not found" }, null);
  });
};

Event.remove = (id, callback) => {
  const QUERY = "DELETE FROM Event WHERE id = ?";

  connection.query(QUERY, id, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.affectedRows == 0) {
      callback({ kind: "not found" }, null);
      return;
    }
    callback(null, results);
  });
};
export default Event;
