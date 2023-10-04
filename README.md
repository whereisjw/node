# params 와 query string

```
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
```

# 13. Express

1)웹, 모바일 서비스를 지원하는 node.js 의 서버 라이브러리
내부적으로 프레임워크 형식이 지원

2)Express 서버 생성
-express 설치 : npm i express

const express = require('express') //const express import 'express'

const app = express()

작성하는 로직(요청,응답)

app.listen(포트번호)

3. request(요청)

express\_서버.요청메소드('패스',콜백함수)

ex) app.get('/',(req,res,next)=>{}) //해당 페이지를 요청 status(200)

//post 방식은 body를 통해 데이터 전달 ,JSON 객체로 생성

app.use(express.json())

ex) app.post('/join',(req,res,next)=>{
const {a,b,c} = req.body
})

//put 방식은 데이터 replace

ex) app.put('/:id',(req,res,next)=>{
const id = req.params.id
})

//delete방식은 데이터 delete

ex) app.delete('/:id',(req,res,next)=>{
const id = req.params.id
})

4)응답

res.send(전송할내용)

res.sendFile(전송할내용을담고있는파일의주소를호출)

res.sendStatus(status코드,전송할내용)

res.set(status코드)

예) /요청이 오면, hello 문자를 전송

app.get('/',(req,res,next)=>{
res.send('hello')
})

5)미들웨어 특징

-미들웨어는 작성된 순서에 따라 호출된다. 클라이언트의 요청 주소를 찾기 위해
순서대로 검색하며 실행

- 미들웨어는 작성된 순서에 따라 호출된다. 클라이언트의 요청 주소를 찾기위해 순서대로 검색하며 실행
- 미들웨어는 개별적으로 작성할 수도 있고, 체이닝으로 연결하여 작성도 가능하다
- 미들웨어의 가장 마지막에는 에러를 처리하는 로직을 작성(use,all사용)

* use 와 all

미들웨어 전체적으로 실행되는 메소드를 정의할 때 사용
use : /path 주소는 하위모든 주소를 포함하는 개념임
예)app.use('/sky',callback)
all : /path/*path 경로 다음에 *기호를 추가하여 하위 모든 주소를 포함하는 개념으로 사용가능함
예)app.all('/sky/\*',callback)

- 미들웨어의 콜백함수는 여러개 정의가 가능
  app.use('/',(req,res,next)=>{
  console.log('first') 우선순위는 첫번째 콜백함수이다.
  res.status(200) request 하나당 response는 하나만 존재한다.
  next()
  },(req,res,next)=>{
  console.log('second')
  })

- 미드웨어의 콜백함수에서 분기문 사용시 주의점
  app.get('/',(req,res,next)=>{
  console.log('first')
  if(true){
  return res.sendStatus(200)
  }
  res.send('hi')
  })
