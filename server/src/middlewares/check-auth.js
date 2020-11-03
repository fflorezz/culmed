import jwt from "jsonwebtoken";
import config from "./../config";

import User from "./../resources/user/user.model";

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export const checkAuth = async (req, res, next) => {
  try {
    console.log("*****", req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Autentication failed" });
    }
    const decodedToken = await verifyToken(token);
    const user = await User.findByPk(decodedToken.sub, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(401).send({ message: "Autentication failed!!" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
};
