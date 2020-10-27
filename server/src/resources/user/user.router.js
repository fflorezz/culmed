import express from "express";

import { getAll, getById, signup, login } from "./user.controllers";
import { signupValidator, loginValidator } from "./user.validators";

const router = express.Router();

router.route("/").get(getAll).post(signupValidator, signup);

router.route("/login").post(loginValidator, login);

router.route("/:userId").get(getById);

export default router;
