const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

// Get Request /api/invoices
// Retrievies all Invoice records
router.get("/", (req, res) => {
  const sql = "SELECT * FROM Invoice";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

// Post Request /api/invoices
// Adds Invoice to records
router.post("/", (req, res) => {
  const {
    first_name,
    last_name,
    phone_number,
    email,
    address,
    subscription_id,
    subscription_name,
    subscription_price,
    employee_id,
  } = req.body;

  const new_Date = new Date();

  const sql =
    "INSERT INTO Invoices (first_name, last_name, phone_number, email, address, subscription_id, subscription_name, subscription_price, employee_id, new_date ) VALUES (?, ?, ?, ?, ?, ?, ?, ? ,? ,?)";
  const data = [
    first_name,
    last_name,
    phone_number,
    email,
    address,
    subscription_id,
    subscription_name,
    subscription_price,
    employee_id,
    new_Date,
  ];

  connection.query(sql, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json({ result, msg: "Invoice Succesffully submitted" });
  });
});

module.exports = router;
