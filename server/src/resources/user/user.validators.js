import { body } from "express-validator";

export const signupValidator = [
  body("userName").not().isEmpty().withMessage("name is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must bee at least 6 char long"),
  body("email").isEmail().withMessage("email is required"),
];

export const loginValidator = [
  body("password").not().isEmpty().withMessage("password is required"),
  body("email").normalizeEmail().isEmail().withMessage("email is required"),
];
