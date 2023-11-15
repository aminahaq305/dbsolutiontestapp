const mysql = require("mysql2");
const fs = require("fs");
var path = require("path");

const db = mysql.createConnection({
  host: "mysql-43bacd9-test-db-sc.a.aivencloud.com",
  user: "avnadmin",
  port: 13924,
  password: "AVNS_9d5MZSrRQARbboW3lTZ",
  database: "defaultdb",
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(path.join(__dirname, "ca.pem")).toString(),
  },
});

module.exports = db;
