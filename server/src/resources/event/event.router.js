import express from "express";
import { commentValidator, eventValidator } from "./event.validators";

import { upload } from "../../middlewares/multer";

import { checkAuth } from "./../../middlewares/check-auth";
import {
  getAll,
  create,
  getById,
  update,
  remove,
  getByUserId,
  addComment,
} from "./event.controllers";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(checkAuth, upload.single("image"), eventValidator, create);

router
  .route("/:eventId")
  .get(getById)
  .put(checkAuth, eventValidator, update)
  .delete(checkAuth, remove);

router.route("/:eventId/comment").post(commentValidator, addComment);

router.get("/user/:userId", checkAuth, getByUserId);

export default router;
