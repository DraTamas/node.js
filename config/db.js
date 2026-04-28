const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webaruhaz",
  port: 3307,
});

connection.connect((err) => {
  if (err) {
    console.error("Hiba az adatbázis kapcsolódáskor:", err);
    return;
  }
  console.log("Sikeres adatbázis kapcsolat!");
});

module.exports = connection;