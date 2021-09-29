const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

// Get Request /api/sales/employee/daily-totals
// Retrieves total sum of all sales per employee daily
router.get("/employee/daily-totals", (req, res) => {
  const sql =
    "SELECT invoices.employee_id, employees.employee_id, employee_name, SUM(subscription_price) FROM Invoices JOIN employees ON invoices.employee_id = employees.employee_id WHERE date(new_date) = current_date GROUP BY employee_name";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

// Get Request /api/sales/daily-total
// Retrieves total sum of all sales daily
router.get("/daily-total", (req, res) => {
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

// Get Request /api/sales/monthly-total
// Retrieves total sum of all sales monthly
router.get("/monthly-total", (req, res) => {
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

// Get Request /api/sales/yearly-total
// Retrieves total sum of all sales yearly
router.get("/yearly-total", (req, res) => {
  const sql =
    "SELECT SUM(subscription_price) FROM Invoices WHERE year(new_date) = year(CURRENT_DATE())";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
      x;
    }
    res.status(200).json(result);
  });
});

// ALL TIME DATA ENDPOINTS ------------------------------

// Get Request /api/sales/employee/all-time-totals
// Retrieves total sum of all employees & there sales
router.get("/employee/all-time-totals", (req, res) => {
  const sql =
    "SELECT invoices.employee_id, employees.employee_id, employee_name, SUM(subscription_price) FROM Invoices JOIN employees ON invoices.employee_id = employees.employee_id GROUP BY employee_name";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

// Get Request /api/sales/all-time-totals
// Retrieves total sum of all sales
router.get("/all-time-totals", (req, res) => {
  const sql = "SELECT  SUM(subscription_price) FROM Invoices";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

module.exports = router;
