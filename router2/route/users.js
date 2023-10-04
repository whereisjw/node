import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("get 방식 users페이지입니다");
});

router.post("/", (req, res, next) => {
  res.send("post 방식 users페이지입니다");
});

router.put("/:id", (req, res, next) => {
  res.send(`put방식 users페이지입니다 ${req.params.id}`);
});

router.delete("/:id", (req, res, next) => {
  res.send(`delete방식 users페이지입니다 ${req.params.id}`);
});
export default router;
