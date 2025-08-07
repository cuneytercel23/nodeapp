const express = require("express");
const axios = require("axios");

const app = express();

const serviceName = process.env.SERVICE_NAME;

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
