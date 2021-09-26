const express = require("express");
const db = require("../../db/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("route working");
});

module.exports = router;
