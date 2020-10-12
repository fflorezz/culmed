import express from "express";

import {
  getAllEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} from "./event.controllers";

const router = express.Router();

router.route("/").get(getAllEvents).post(createEvent);

router.route("/:id").get(getEvent).put(updateEvent).delete(deleteEvent);

export default router;
