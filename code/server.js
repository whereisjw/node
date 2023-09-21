const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("홈입니다");
});
app.get("/list", () => {
  let result = db
    .collection("database")
    .find()
    .toArray(function (err, items) {});
  console.log(result[0]);
  res.send("db");
});
