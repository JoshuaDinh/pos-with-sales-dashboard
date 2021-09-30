const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

// Get Request /api/sales/employee/daily-totals
// Retrieves total sum of all sales per employee daily
router.get("/employee/daily-totals", (req, res) => {
  const sql =
    "SELECT Invoices.employee_id, employees.employee_id, employee_name, SUM(subscription_price) FROM Invoices JOIN employees ON Invoices.employee_id = employees.employee_id WHERE date(new_date) = current_date GROUP BY employee_name";
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
    res.status(200).json(result);
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
    }
    res.status(200).json(result);
  });
});
// Get Request /api/sales/employee/monthly-total
// Retrieves total sum of all sales monthly
router.get("/employee/monthly-total", (req, res) => {
  const sql =
    "SELECT Invoices.employee_id, employees.employee_id, employee_name, employee_title, SUM(subscription_price) FROM Invoices JOIN employees ON Invoices.employee_id = employees.employee_id WHERE month(CURRENT_DATE())AND year(new_date) = year(CURRENT_DATE())GROUP BY employee_name";

  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
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

// Get Request /api/sales/yearly-total/by-month
// Retrieves total sum of yearly sales catagorized by month
router.get("/yearly-total/by-month", (req, res) => {
  const sql =
    "SELECT SUM(subscription_price), new_date FROM Invoices WHERE year(new_date) = year(CURRENT_DATE()) GROUP BY MONTH(new_date)";
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
    "SELECT Invoices.employee_id, employees.employee_id, employee_name, SUM(subscription_price) FROM Invoices JOIN employees ON Invoices.employee_id = employees.employee_id GROUP BY employee_name";
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
  const sql = "SELECT SUM(subscription_price) FROM Invoices";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

// Counts
// Get Request /api/sales/subscription-counts/monthly
// Retrieves total quantity * name of subscriptions sold by entire team for the month
router.get("/subscription-counts/monthly", (req, res) => {
  const sql =
    "SELECT subscription_name, subscription_id, subscription_price, COUNT(*) FROM Invoices  WHERE month(new_date) = month(CURRENT_DATE())AND year(new_date) = year(CURRENT_DATE()) GROUP BY subscription_name ORDER BY subscription_price ASC ";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});
// Get Request /api/sales/subscription-counts/daily
// Retrieves total quantity * name of subscriptions sold by entire team for the day
router.get("/subscription-counts/daily", (req, res) => {
  const sql =
    "SELECT subscription_name, COUNT(*) FROM Invoices WHERE date(new_date) = current_date GROUP BY subscription_name ORDER BY subscription_price ASC ";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

module.exports = router;
