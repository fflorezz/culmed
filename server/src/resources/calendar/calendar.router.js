import express from "express";

import { getByUserId, addEvent, removeEvent } from "./calendar.controllers";
import { checkAuth } from "./../../middlewares/check-auth";

const router = express.Router();

router.route("/:userId").get(getByUserId);

router.route("/add/:eventId").post(checkAuth, addEvent);
router.route("/remove/:eventId").delete(checkAuth, removeEvent);

export default router;
