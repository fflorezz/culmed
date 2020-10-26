import express from "express";
import cors from "cors";
import logger from "morgan";
import compression from "compression";
import sequelize from "./db";
import path from "path";

import config from "./config";

import usersRouter from "./resources/user/user.router";
import eventsRouter from "./resources/event/event.router";
import calendarRouter from "./resources/calendar/calendar.router";
import followRouter from "./resources/follow/follow.router";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.use("/api/users", usersRouter);
app.use("/api/events", eventsRouter);
app.use("/api/calendar", calendarRouter);
app.use("/api/follow", followRouter);

app.get("/api", (req, res) => {
  res.send("<h1>Hello</h1>");
});

export const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(config.port, () => {
    console.info("Server started on port %s.", config.port);
  });
};
