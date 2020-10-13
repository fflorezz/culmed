import express from "express";

import {
  getAll,
  create,
  getById,
  update,
  remove,
  getByUserId,
} from "./event.controllers";

const router = express.Router();

router.route("/").get(getAll).post(create);

router.route("/:id").get(getById).put(update).delete(remove);

router.get("/user/:userId", getByUserId);

export default router;
