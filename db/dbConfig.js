const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "joshua123",
  SSL: "enabled with TLS_AES_256_GCM_SHA384",
  database: "ezoic",
});

connection.connect((err) => {
  if (err) {
    console.log(`error connecting : ${err.stack}`);
  }
  console.log("Connected successfully to DB");
});

module.exports = connection;
