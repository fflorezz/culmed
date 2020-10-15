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
  res.send({ message: hello });
};

const router = express.Router();

router.route("/").get(fakeController).post(fakeController);

router
  .route("/:id")
  .get(fakeController)
  .put(fakeController)
  .delete(fakeController);

router.get("/user/:userId", fakeController);

export default router;
