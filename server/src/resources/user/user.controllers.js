import { validationResult } from "express-validator";

import User from "./user.model";

export const getAll = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["userName", "avatarImg", "id"],
    });
    res.send({ data: users });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};

export const getById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findAll({
      attributes: ["id", "userName", "avatarImg"],
      where: {
        id: userId,
      },
    });
    if (!user.length) {
      return res
        .status(404)
        .send({ message: `couldn't find user with id ${userId}` });
    }
    res.send({ data: user[0] });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};

export const signup = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).send({ Error: errors.array()[0].msg }).end();
  }

  if (!req.body.userName || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "username, email and password are required" });
  }

  const { userName, email, password, avatarImg } = req.body;

  try {
    const user = await User.create({ userName, email, password, avatarImg });
    if (user) {
      res.status(201).send({ data: { id: user.toJSON().id } });
    }
  } catch (err) {
    console.log(err);
    if (err.errors[0].type === "unique violation") {
      return res.status(400).send({ message: "user exists already" });
    }
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};
