const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

// Get Request from api/employees
// Returns all records from employee table
router.get("/", (req, res) => {
  const sql = "SELECT * FROM employees";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(result);
  });
});

// Post Request to api/employees/delete
// Removes Employee Record By Conidition (You Must insert Condition)
router.post("/delete", (req, res) => {
  //   const sql = "Delete FROM employees WHERE <Insert Condition>  ";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res
      .status(200)
      .json({ result: result, message: "Record Deleted Succesfully" });
  });
});

module.exports = router;
