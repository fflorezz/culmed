import express from "express";

import { getByUserId, addEvent } from "./calendar.controllers";

const router = express.Router();

router.route("/").post(addEvent);

router.route("/user/:userId").get(getByUserId);

export default router;
