const express = require("express");
const app = express();
const path = require("path");
let memberList = [];
//path가 root이면 welcome 메세지 출력z

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { id, pass } = req.body;
  // 서버에 오는 data키값은 form의 name 값이다
  let result = 0;
  for (let i = 0; i < memberList.length; i++) {
    let member = memberList[i];
    if (id == member.id && pass == member.pass) {
      result = 1;
      break;
    }
  }
  //member/list 에서 id,pass 일치하면 --->1, 일치하지않으면 --->0

  if (id == "test" && pass == "1234") {
    res.redirect("/");
  } else {
    res.sendFile(path.join(__dirname, "loginFail.html"));
  }
});
app.get("/join", (req, res) => {
  res.sendFile(path.join(__dirname, "join.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/join", (req, res) => {
  memberList.push(req.body);
  const { id, pass, name, address } = req.body;
  console.log(memberList);
  res.redirect("/");
});

app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(8080, () => {
  console.log("http://localhost:8080 실행중");
});
