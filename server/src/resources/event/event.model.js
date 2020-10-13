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
      console.log(err);
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

export default Event;
