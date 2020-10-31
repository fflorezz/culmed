import express from "express";

import { getByUserId, addEvent, removeEvent } from "./calendar.controllers";
import { checkAuth } from "./../../middlewares/check-auth";

const router = express.Router();

router.use("/", checkAuth);
router.route("/:userId").get(getByUserId);
router.route("/add/:eventId").post(addEvent);
router.route("/remove/:eventId").delete(removeEvent);

export default router;
