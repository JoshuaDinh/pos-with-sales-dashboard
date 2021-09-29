const express = require("express");
const connection = require("../../db/dbConfig");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, revenue, speed, cost } = req.body;

  const sql =
    "INSERT INTO plans (name, revenue, speed, cost) VALUES (?, ?, ?, ?)";
  const data = [name, revenue, speed, cost];

  connection.query(sql, data, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/", (req, res) => {
  const sql = "SELECT * FROM plans";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
