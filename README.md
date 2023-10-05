# dwitter

```
import express from "express";
import dwitterRouter from "./router/dwitter.js";

const app = express();
app.use("/dwitter", dwitterRouter);
app.listen(4845, () => {
  console.log(`http://localhost:4845 서버실행중`);
});
```

```
import express from "express";
import ejs from "ejs";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
let dwitterList = [
  {
    pid: 100,
    id: "james",
    name: "제임스",
    date: "2023.10.5",
    content: "안녕하세요",
  },
  {
    pid: 140,
    id: "james",
    name: "제임스",
    date: "2023.10.5",
    content: "안녕하세요 글또씀",
  },
];
router.get("/", (req, res, next) => {
  res.render("index.ejs", { dwitterList });
});

router.post("/", (req, res, next) => {
  let { id, name, content } = req.body;
  const pid = Date.now();
  let date = new Date(Date.now());
  date = date.toLocaleDateString();
  dwitterList.push({ pid, id, name, date, content });
  res.redirect("/dwitter");
});

router.put("/", (req, res, next) => {
  const { pid, content } = req.body;
  console.log(pid, content);
  dwitterList.filter((dwitter, index) => {
    if (dwitter.pid == parseInt(pid)) {
      dwitter.content = content;
    }
  });
  console.log(dwitterList);
  res.status(204).send("업데이트 성공");
});

router.delete("/", (req, res, next) => {
  let { pid } = req.body;
  // dwitterList = dwitterList.filter((dwi, idx) => {
  //   return dwi.pid != pid;
  // });
  let idx = dwitterList.findIndex((v, i) => {
    return v.pid == pid;
  });
  dwitterList.splice(idx, 1);
  console.log(dwitterList);
  res.send("삭제성공");
});

router.get("/:id", (req, res, next) => {
  let myList = dwitterList.filter((v) => {
    return v.id == req.params.id;
  });
  res.render("index.ejs", { dwitterList: myList });
});

export default router;
```
