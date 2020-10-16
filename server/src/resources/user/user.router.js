import express from "express";

import { getAll, getById, signup } from "./user.controllers";

const router = express.Router();

router.route("/").get(getAll).post(signup);

router.route("/:userId").get(getById);

export default router;
