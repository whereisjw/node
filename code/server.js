const express = require("express");
const app = express();

app.listen(4845, function () {
  console.log("4845 server");
});

app.get("/", function (req, res) {
  res.send("홈입니다");
});
