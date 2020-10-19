import express from "express";

import {
  getFollowersAndFollowings,
  follow,
  unfollow,
} from "./follow.controllers";

const router = express.Router();

router.route("/:userId/add/:followingId").post(follow);

router.route("/:userId/remove/:followingId").delete(unfollow);

router.route("/:userId").get(getFollowersAndFollowings);

export default router;
