const express = require("express");
const axios = require("axios");

const app = express();

const serviceName = process.env.SERVICE_NAME;

akaya60

app.get("/users", (req, res) => {
  const userId = req.query.id;
  // !!! SONAR PATLATIR: SQL Injection
  db.query(`SELECT * FROM users WHERE id = ${userId}`, (err, result) => {
    res.json(result);
  });
});

app.get("/loop", () => {
  while(true) { 
    console.log("Patlat beni!");
  }
});

// !!! SONAR PATLATIR: Hardcoded secret
const API_KEY = "12345-super-secret-key"; 
app.get("/admin", (req, res) => res.send(API_KEY));

app.get("/", (req, res, next) => {
  res.send(`Hello this is ${serviceName}`);
});

app.get("/app2", (req, res, next) => {
  axios
    .get("http://app2-service:3002")
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

app.listen(3001, () => {
  console.log("Service is up on port 3001 ");
});
