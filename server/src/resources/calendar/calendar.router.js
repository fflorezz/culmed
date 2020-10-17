import express from "express";

import { getByUserId, addEvent, removeEvent } from "./calendar.controllers";

const router = express.Router();

router.route("/").post(addEvent).delete(removeEvent);

router.route("/user/:userId").get(getByUserId);

export default router;
