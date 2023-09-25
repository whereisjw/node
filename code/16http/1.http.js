const http = require("http");
const fs = require("fs");

//서버 생성 :createSever()
console.log("server start");
const server = http.createServer((req, res) => {
  console.log("incoming...");
  const url = req.url;
  //응답생성 - url의 path별로 응답처리 /join /login
  //res.write("welcome");
  res.setHeader("content-Type", "text/html");

  if (url === "/") {
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    fs.createReadStream("./html/course.html").pipe(res);
  } else {
    fs.createReadStream("./html/error.html").pipe(res);
  }
  // res.end();
});

server.listen(8080); //http://localhost:8080
