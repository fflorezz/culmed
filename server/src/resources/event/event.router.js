import express from "express";

import {
  getAll,
  create,
  getById,
  update,
  remove,
  getByUserId,
} from "./event.controllers";

const fakeController = (req, res) => {
  res.send({ message: "hello" });
};

const router = express.Router();

router.route("/").get(getAll).post(create);

router.route("/:id").get(getById).put(fakeController).delete(fakeController);

router.get("/user/:userId", getByUserId);

export default router;
