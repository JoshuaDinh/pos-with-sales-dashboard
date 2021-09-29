const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "joshua123",
//   SSL: "enabled with TLS_AES_256_GCM_SHA384",
//   database: "ezoic",
// });
const connection = mysql.createConnection({
  host: "phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ut69293absdumgjg",
  password: "ppt2kxv6brdt4en7",
  database: "fvwaci7txkoyj1me",
});

connection.connect((err) => {
  if (err) {
    console.log(`error connecting : ${err}`);
  }
  console.log("Connected successfully to DB");
});

module.exports = connection;
