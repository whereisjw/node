import express from "express";

const router = express.Router();
/* GET - http://localhost:8080/posts
POST - http://localhost:8080/posts
PUT - http://localhost:8080/posts/test
DELETE - http://localhost:8080/posts/test */

router.get("/", (req, res, next) => {
  res.send("겟방식:포스트페이지입니다");
});
router.post("/", (req, res, next) => {
  res.send("포스트방식:포스트페이지입니다");
});
router.put("/:id", (req, res, next) => {
  res.send(`풋방식: /id params 페이지입니다 ${req.params.id}`);
});
router.delete("/:id", (req, res, next) => {
  res.send(`딜리트방식: /id params 페이지입니다 ${req.params.id}`);
});

export default router;
