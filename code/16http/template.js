const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "hong";
let courses = [{ name: "html" }, { name: "node.js" }, { name: "CSS" }, { name: "Javascript" }];
let scoreList = [
  { name: "html", grade: "A" },
  { name: "node.js", grade: "A" },
  { name: "CSS", grade: "A" },
  { name: "Javascript", grade: "A" },
];

//서버 생성 : port - 3000
console.log("-- server start --");
const server = http.createServer((req, res) => {
  console.log("incoming...");
  //1. 클라이언트요청 URL 받아옴
  const url = req.url;
  //2.클라이언트 전송타입
  res.setHeader("Content-Type", "text/html"); //html

  // 2. path 체크  : / --> index.ejs
  if (url == "/") {
    // 3.ejs.renderFile(매개변수) <=프로미스타입처리
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
  } else if (url == "/courses") {
    ejs
      .renderFile("./template/course.ejs", { courses })
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
  } else if (url == "/score") {
    ejs
      .renderFile("./template/score.ejs", { scoreList })
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
  } else {
    //path가 다르면 --> file not found~ Hong!
    ejs
      .renderFile("./template/error.ejs", { name })
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
  }
});

server.listen(3000);
