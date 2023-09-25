const express = require("express");
const app = express();

app.listen(9000, () => {
  console.log("9000 서버 실행중");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/test/main.html");
});

app.get("/courses", (req, res) => {
  res.sendFile(__dirname + "/test/courses/courses.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/test/login/login.html");
});

app.get((req, res) => {
  res.status(404).send("페이지를 찾을 수 없습니다");
});
