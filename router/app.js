const express = require("express");
// import express form 'express';

const app = express();

app.listen(8080, () => {
  console.log("http://localhost:8080 실행중");
});
app.get("/", (req, res, next) => {
  res.send("GET:/");
});
app.post("/", (req, res, next) => {
  res.send("POST:/");
});

app.put("/:id", (req, res, next) => {
  const id = req.params.id;
  res.send(`PUT: /:id -->${id}`);
});
app.delete("/:id/:name/:address", (req, res, next) => {
  let { id, name, address } = req.params;
  //   const id = req.params.id;
  //   const name = req.params.name;
  //   const address = req.params.address;
  res.send(`DELETE: /:id -->${id},${name},${address}`);
});

//GET요청 --> http://localhost:8080/test/?keyword=bts&name=hong
app.get("/test", (req, res, next) => {
  let { keyword, name } = req.query;
  //   const keyword = req.query.keyword;
  //   const name = req.query.name;
  res.send(`get: /test -- > ${keyword}, ${name}`);
});

//POST : name,address ---> http://localhost:8080/join  --> res : 201 전송

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/join", (req, res, next) => {
  const { name, address } = req.body;
  console.log(`${name},${address}`);
  res.status(201).send(`${name},${address}`);
});
