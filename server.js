const express = require("express");
const { inspect } = require('util');

const PORT = 8080;

//APP
const app = express();
app.get("/", (req, res) => {
  const reqStr = inspect(req, { depth: Infinity });
  console.log(reqStr);
  res.send("mymy");
});

app.get("/list", (req, res) => {
  const reqStr = inspect(req, { depth: Infinity });
  console.log(reqStr);
  res.send("/list");
});

app.get("/monot", (req, res) => {
  const reqStr = inspect(req, { depth: Infinity });
  console.log(reqStr);
  res.send("/monot");
});

app.get("/monot/list", (req, res) => {
  const reqStr = inspect(req, { depth: Infinity });
  console.log(reqStr);
  res.send("/monot/list");
});

app.listen(PORT);
console.log("Server is running");
