import { body } from "express-validator";

export const eventValidator = [
  body("title").not().isEmpty().withMessage("title is required"),
  body("startDate").not().isEmpty().withMessage("start date is required"),
  body("location").not().isEmpty().withMessage("location is required"),
  body("description")
    .not()
    .isEmpty()
    .withMessage("description is required")
    .isLength({ min: 15, max: 300 })
    .withMessage("description require min 15 characters max 120 characters"),
  body("price")
    .isNumeric({ no_symbols: true })
    .withMessage("price should contain only numbers without symbols"),
];
