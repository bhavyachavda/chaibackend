require("dotenv").config();

const express = require("express");
const app = express();
const port = 2210;

app.get("/", (req, res) => {
  res.send("Hello world bhavya");
});

app.get("/twitter", (req, res) => {
  res.send("bhavyadotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code<h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening omn port ${port}`);
});
