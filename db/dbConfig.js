const mysql = require("mysql");

const connection = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b9ce9353881a66",
  password: "5ba60be2",
  database: "heroku_7b28926ea541b90",
});

connection.getConnection((err, connection) => {
  if (err) {
    console.log(`error connecting : ${err}`);
  }
  console.log("Connected successfully to DB");
});

module.exports = connection;
