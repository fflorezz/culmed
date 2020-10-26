import jsonwebtoken from "jsonwebtoken";
import config from "./../config";

export const createToken = payload => {
  return jsonwebtoken.sign(payload, config.jwtSecret, {
    expiresIn: "1h",
  });
};
