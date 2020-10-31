import express from "express";

import { checkAuth } from "./../../middlewares/check-auth";
import {
  getFollowersAndFollowings,
  follow,
  unfollow,
} from "./follow.controllers";

const router = express.Router();

router.use("/", checkAuth);
router.route("/add/:followingId").post(follow);
router.route("/remove/:followingId").delete(unfollow);
router.route("/:userId").get(getFollowersAndFollowings);

export default router;
