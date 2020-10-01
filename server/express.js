const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World </h1>");
});

module.exports = app;
