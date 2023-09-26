/* 
1. 주소록(address) 배열 객체 생성
2. POST 방식으로 이름,주소를 입력받아 address에 추가
3. GET 방식으로 주소록(address) 확인
*postman이용해서 테스크트 진행할것
*/
const http = require("http");
const address = [];

//서버생성
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/address") {
    if (method == "GET") {
      if (address.length != 0) {
        res
          .writeHead(200, {
            "Content-Type": "application/json",
          })
          .end(JSON.stringify(address));
      } else {
        res.end("--No data--");
      }
    } else if (method == "POST") {
      const body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          address.push(JSON.parse(Buffer.concat(body).toString()));
          res.writeHead(201).end();
        });
    }
  } else {
    res.write("page not found ---");
    res.end();
  }
});

//9000 번 포트로 리스닝
server.listen(9000, () => {
  console.log("9000번 포트 서버 실행중");
});
