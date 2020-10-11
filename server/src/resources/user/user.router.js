import express from "express";
import connection from "./../../db";

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

export default router;
