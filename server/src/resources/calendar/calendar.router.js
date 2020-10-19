import express from "express";

import { getByUserId, addEvent, removeEvent } from "./calendar.controllers";

const router = express.Router();

router.route("/:userId").get(getByUserId);

router.route("/:userId/add/:eventId").post(addEvent);
router.route("/:userId/remove/:eventId").delete(removeEvent);

export default router;
