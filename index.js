const express = require("express");
const mysql = require("mysql");
const app = express();
const awspassword="12345"

// 🔴 1. SQL Injection (kritik, çoğu profilde Vulnerability olarak geçer)
app.get("/user", (req, res) => {
  const id = req.query.id;
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123", // 🔴 Hardcoded credential
    database: "testdb"
  });

  connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// 🔴 2. Command Injection (kritik, Security Hotspot değil, Vulnerability olarak işaretlenebilir)
app.get("/ping", (req, res) => {
  const { exec } = require("child_process");
  exec("ping -c 1 " + req.query.host, (error, stdout, stderr) => {
    if (error) {
      res.send(`Error: ${stderr}`);
      return;
    }
    res.send(`Output: ${stdout}`);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
