# node.js EJS문법

```
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
        console.log(data);
        res.end(data);
      })
      .catch(console.error);
  } else if (url == "/courses") {
    ejs
      .renderFile("./template/course.ejs", { courses })
      .then((data) => {
        console.log(data);
        res.end(data);
      })
      .catch(console.error);
  } else if (url == "/score") {
    ejs
      .renderFile("./template/score.ejs", { scoreList })
      .then((data) => {
        console.log(data);
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
```

파일이 없으므로 scoreList라는 데이터 임의로 수기작성해서 /score 라는 path로 score.ejs로 렌더링하기
express 라이브러리 사용하면 좀 더 편하고 짧게 코드를 작성 할 수 있음.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <table border="1" align="center">
      <tr>
        <th>번호</th>
        <th>과목</th>
        <th>점수</th>
      </tr>
      <% scoreList.forEach((v,i)=>{ %>
      <tbody align="center">
        <tr>
          <td><%= i+1 %></td>
          <td><%= v.name %></td>
          <td><%= v.grade %></td>
        </tr>
      </tbody>
      <% }) %>
    </table>
  </body>
</html>
```

<%%>와 <%= %> 사용하여 렌더링하고싶은 부분에 적기
스타일은 nodejs수업이라 css파일 만들기 번거롭기 때문에 인라인으로 작성함
