const express = require("express");
const axios = require("axios");

const app = express();

const serviceName = process.env.SERVICE_NAME;

app.get("/", (req, res, next) => {
  res.send(`Hello this is ${serviceName}`);
});



app.listen(3001, () => {
  console.log("Service is up on port 3001 ");
});
