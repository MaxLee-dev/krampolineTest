const express = require("express");

const PORT = 8080;

//APP
const app = express();
app.get("/", (req, res) => {
  console.log(JSON.stringify(req));
  res.send("mymy");
});

app.get("/list", (req, res) => {
  console.log(JSON.stringify(req));
  res.send("/list");
});

app.get("/monot", (req, res) => {
  console.log(JSON.stringify(req));
  res.send("/monot");
});

app.get("/monot/list", (req, res) => {
  console.log(JSON.stringify(req));
  res.send("/monot/list");
});

app.listen(PORT);
console.log("Server is running");
