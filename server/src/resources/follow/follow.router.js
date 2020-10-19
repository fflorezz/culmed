import express from "express";

import { getFollows, addFollow } from "./follow.controllers";

const router = express.Router();

router.route("/").post(addFollow);

router.route("/user/:userId").get(getFollows);

export default router;
