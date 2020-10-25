import express from "express";
import { eventValidator } from "./event.validators";
import multer from "multer";

import {
  getAll,
  create,
  getById,
  update,
  remove,
  getByUserId,
} from "./event.controllers";

const upload = multer({ dest: "uploads" });

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(upload.single("image"), eventValidator, create);

router
  .route("/:eventId")
  .get(getById)
  .put(eventValidator, update)
  .delete(remove);

router.get("/user/:userId", getByUserId);

export default router;
