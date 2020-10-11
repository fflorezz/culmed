import express from "express";
import cors from "cors";
import logger from "morgan";
import compression from "compression";
import connection from "./db";

import config from "./config";

import usersRouter from "./resources/user/user.router";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

export const start = () => {
  connection.connect(() => {
    console.log("Connected to database");
  });
  app.listen(config.port, () => {
    console.info("Server started on port %s.", config.port);
  });
};
