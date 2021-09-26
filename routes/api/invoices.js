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
  const { CustomerName, Phone, PlanId, EmployeeId } = req.body;

  const new_Date = new Date();

  const sql =
    "INSERT INTO Invoices (CustomerName, Phone, PlanId, EmployeeId, new_Date ) VALUES (?, ?, ?, ?, ?)";
  const data = [CustomerName, Phone, PlanId, EmployeeId, new_Date];

  connection.query(sql, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json({ result, msg: "Invoice Succesffully submitted" });
  });
});

module.exports = router;
