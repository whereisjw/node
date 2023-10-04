const express = require("express");
const app = express();
// import express form 'express';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("http://localhost:8080 실행중");
});

app
  .get(
    "/",
    (req, res, next) => {
      // console.log("first");
      // next()
      res.send("GET:/");
    },
    (req, res, next) => {
      console.log("second");
    }
  )
  .post("/", (req, res, next) => {
    res.send("POST:/");
  })
  .put("/:id", (req, res, next) => {
    const id = req.params.id;
    res.send(`PUT: /:id -->${id}`);
  })
  .delete("/:id/:name/:address", (req, res, next) => {
    let { id, name, address } = req.params;
    //   const id = req.params.id;
    //   const name = req.params.name;
    //   const address = req.params.address;
    res.send(`DELETE: /:id -->${id},${name},${address}`);
  })
  .get("/test", (req, res, next) => {
    //GET요청 --> http://localhost:8080/test/?keyword=bts&name=hong
    let { keyword, name } = req.query;
    //   const keyword = req.query.keyword;
    //   const name = req.query.name;
    res.send(`get: /test -- > ${keyword}, ${name}`);
  })
  .post("/join", (req, res, next) => {
    //POST : name,address ---> http://localhost:8080/join  --> res : 201 전송
    const { name, address } = req.body;
    console.log(`${name},${address}`);
    res.status(201).send(`${name},${address}`);
  })
  .use((req, res, next) => {
    ///404에러처리
    res.status(404).send("요청하신 페이지를 찾을 수 없습니다.");
  });
