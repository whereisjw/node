const express = require("express");
const app = express();
// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect(
//   "mongodb+srv://admin:qwer1234@cluster0.phycxv2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
//   function (에러, client) {
//     if (에러) return console.log(에러);
//     //서버띄우는 코드 여기로 옮기기
//
//   }
// );
app.listen("4845", function () {
  console.log("listening on 4845");
});
const { MongoClient } = require("mongodb");

// MongoDB 연결 정보
const uri =
  "mongodb+srv://admin:qwer1234@cluster0.phycxv2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"; // MongoDB 서버 주소
const dbName = "five"; // 연결할 데이터베이스 이름

// MongoClient 인스턴스 생성
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// MongoDB에 연결
async function connectToMongoDB() {
  try {
    // MongoDB 클라이언트 연결
    await client.connect();
    console.log("MongoDB에 연결되었습니다.");

    // 데이터베이스 선택
    const db = client.db(dbName);

    // 여기에서 데이터베이스에 쿼리 또는 다른 작업을 수행할 수 있습니다.
  } catch (error) {
    console.error("MongoDB 연결 오류:", error);
  } finally {
    // 연결 종료
    // client.close(); // 연결을 닫으려면 필요한 경우 주석을 해제하세요.
  }
}

// MongoDB에 연결 함수 호출
connectToMongoDB();

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
