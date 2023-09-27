const express = require("express");
const server = express();
const course = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Node" },
  { name: "Express" },
];

server.get("/", (req, res) => {
  //console.log(req.headers);
  res.send("hello world");
});

server.get("/course", (req, res) => {
  //console.log(req.headers);
  res.setHeader("Content-type", "application/json");
  res.status(200);
  res.json(course);
});

server.post("/course", (req, res) => {
  req
    .on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })
    .on("end", () => {
      course.push(JSON.parse(Buffer.concat(body).toString()));
    });
});

server.listen(3300, () => {
  console.log("http://localhost:3300  서버 실행중");
});
