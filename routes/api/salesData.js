const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

// Get Request /api/sales
// Retrieves all employees & there respective sales
router.get("/", (req, res) => {
  const sql =
    "SELECT employee_name, subscription_price, invoice_id FROM employees JOIN Invoices ON employees.employee_id = invoices.employee_id";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
      x;
    }
    res.status(200).json(result);
  });
});

// Get Request /api/sales
// Retrieves all a total sum of all sales for today
router.get("/Today", (req, res) => {
  const sql =
    "SELECT SUM(subscription_price) FROM Invoices WHERE date(new_date) = current_date";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    const values = Object.values(result[0]);
    res.status(200).json(values);
  });
});

// Get Request /api/sales/Month
// Retrieves a total sum of all sales for the month
router.get("/Month", (req, res) => {
  const sql =
    "SELECT SUM(subscription_price) FROM Invoices WHERE month(new_date) = month(CURRENT_DATE())AND year(new_date) = year(CURRENT_DATE())";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
      x;
    }
    const values = Object.values(result[0]);
    res.status(200).json(values);
  });
});

module.exports = router;
