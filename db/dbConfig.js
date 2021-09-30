const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "joshua123",
//   SSL: "enabled with TLS_AES_256_GCM_SHA384",
//   database: "ezoic",
// });
const connection = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b9ce9353881a66",
  password: "5ba60be2",
  database: "heroku_7b28926ea541b90",
});

connection.connect((err) => {
  if (err) {
    console.log(`error connecting : ${err.stack}`);
  }
  console.log("Connected successfully to DB");
});

module.exports = connection;
