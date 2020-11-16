import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

import User from "./user.model";
import { createToken } from "./../../helpers/jwt";
import cloudinary from "./../../middlewares/cloudinary";

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
    const user = await User.findOne({
      attributes: ["id", "userName", "avatarImg"],
      where: {
        id: userId,
      },
    });
    if (!user) {
      return res.status(404).send({ message: `couldn't find user` });
    }
    res.send({ data: user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};

export const signup = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ Error: errors.array()[0].msg }).end();
  }

  if (!req.body.userName || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "username, email and password are required" });
  }

  const { userName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    if (user) {
      const token = createToken({
        sub: user.toJSON().id,
        userName: user.toJSON().userName,
      });
      res.status(201).send({ data: { id: user.toJSON().id, token } });
    }
  } catch (err) {
    console.log(err);
    if (err.errors[0].type === "unique violation") {
      return res.status(400).send({ message: "user exists already" });
    }
    res.status(500).send({ message: "Something went wrong, Try again later" });
  }
};

export const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ Error: errors.array()[0].msg }).end();
  }

  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      attributes: ["id", "userName", "avatarImg", "password"],
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Login in  failed, please try again" });
  }

  if (!existingUser) {
    return res
      .status(401)
      .send({ message: "Invalid credentials, could not log you in" });
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Login in  failed, please try again " });
  }

  if (!isValidPassword) {
    return res
      .status(401)
      .send({ message: "Invalid credentials, could not log you in" });
  }

  let token;
  try {
    token = createToken({
      sub: existingUser.id,
      userName: existingUser.userName,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Login in failed, please try again" });
  }

  res.status(200).send({ data: { id: existingUser.id, token } });
};

export const editProfile = async (req, res) => {
  const user = req.user;
  const newUserName = req.body.userName;

  try {
    let image;
    if (req.file) {
      image = await cloudinary.uploader.upload(req.file.path, {
        width: 200,
      });
    }
    await User.update(
      { userName: newUserName || user.userName, avatarImg: image.url || null },
      {
        where: {
          id: user.id,
        },
      }
    );
    const userUpdate = await User.findByPk(user.id);
    res
      .status(200)
      .send({
        data: {
          avatarImg: userUpdate.avatarImg,
          userName: userUpdate.userName,
        },
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Something went wrong, Try again later",
    });
  }
};
