import express from "express";
import { eventValidator } from "./event.validators";

import {
  getAll,
  create,
  getById,
  update,
  remove,
  getByUserId,
} from "./event.controllers";

const router = express.Router();

router.route("/").get(getAll).post(eventValidator, create);

router
  .route("/:eventId")
  .get(getById)
  .put(eventValidator, update)
  .delete(remove);

router.get("/user/:userId", getByUserId);

export default router;
