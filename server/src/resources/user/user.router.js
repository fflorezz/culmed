import express from "express";

import { getAll, getById, signup, login } from "./user.controllers";

const router = express.Router();

router.route("/").get(getAll).post(signup);

router.route("/login").post(login);

router.route("/:userId").get(getById);

export default router;
