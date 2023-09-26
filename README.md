# Node.js Json

```
const http = require("http");
const course = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Node" },
  { name: "Express" },
];

//서버 생성
const server = http.createServer((요청, 응답) => {
  //url : /request.url

  const url = 요청.url;
  const method = 요청.method;
  if (url === "/course") {
    if (method == "GET") {
      const strCourse = JSON.stringify(course);
      응답.writeHead(200, {
        "Content-Length": Buffer.byteLength(strCourse),
        "Content-Type": "application/json",
      }).end(strCourse);
    } //if get
    else if (method == "POST") {
      //POST 방식으로 요청이 오면 --> JSON데이터 받기
      const body = [];
      요청.on("data", (chunk) => {
        console.log(chunk.toString());
        body.push(chunk);
      });
      요청.on("end", () => {
        //body의 데이터를 string 타입으로 변환
        const bodyStr = Buffer.concat(body).toString();
        // string 문자열을 json객체로 파싱
        const newCourse = JSON.parse(bodyStr);
        //course 배열에 추가
        course.push(newCourse);

        console.log(course);
        // 결과완료전송
        응답.writeHead(201);
        응답.end();
      });
    }
  } else {
    응답.write("error");
    응답.end();
  }
}); //server
//서버 리스닝
server.listen(8080, () => {
  console.log("http://localhost:8080 서버실행중");
});


```

1. 주소록(address) 배열 객체 생성

2. POST 방식으로 이름,주소를 입력받아 address에 추가

3. GET 방식으로 주소록(address) 확인

   \_postman이용해서 테스크트 진행할것
