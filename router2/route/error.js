import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).send("찾을 수 없는 페이지입니다.");
});

export default router;
