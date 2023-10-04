/* 
프로젝트 폴더명 :router2
실행파일 " app.js"
라우터 파일 폴더 :router2/route
라우터 파일:
router2/route/posts.js
router2/route/users.js
실행조건
/posts,/users
GET - http://localhost:8080/posts
POST - http://localhost:8080/posts
PUT - http://localhost:8080/posts/test
DELETE - http://localhost:8080/posts/test

요구사항
- 노드의 express 라이브러리 사용
- 자바스크립트 문법을 이용하여 프로젝트 진행
- postman을 이용하여 테스트
*/
import express from "express";
import postRouter from "./posts.js";
import userRouter from "./users.js";
import errRouter from "./error.js";
const app = express();
app.listen(8080, () => {
  console.log(`http://localhost:8080 서버실행중`);
});
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use(errRouter);
app.get("/", (req, res, next) => {
  res.send("홈화면");
});
