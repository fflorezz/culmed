import express from "express";

import { getAll, getById, signup, login } from "./user.controllers";
import { signupValidator, loginValidator } from "./user.validators";
import { checkAuth } from "./../../middlewares/check-auth";

const router = express.Router();

router.route("/").get(getAll);

router.route("/login").post(loginValidator, login);

router.route("/signup").post(signupValidator, signup);

router.route("/:userId").get(checkAuth, getById);

export default router;
