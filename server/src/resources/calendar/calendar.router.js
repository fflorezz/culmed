import express from "express";

import { getByUserId, addEvent, removeEvent } from "./calendar.controllers";

const router = express.Router();

router.route("/user/:userId").get(getByUserId);

router.route("/user/:userId/add/:eventId").post(addEvent);
router.route("/user/:userId/remove/:eventId").delete(removeEvent);

export default router;
