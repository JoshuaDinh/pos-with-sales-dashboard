const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

router.get("/", (req, res) => {
  const sql =
    "SELECT employee_name, subscription_id  FROM Employees JOIN Invoices ON employees.employee_id = Invoices.employee_id  ";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

module.exports = router;
