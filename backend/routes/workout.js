const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all");
});
router.get("/:id", (req, res) => {
  res.send("get one");
});
router.post("/", (req, res) => {
  res.send("post");
});
router.delete("/:id", (req, res) => {
  res.send("del");
});
router.patch("/:id", (req, res) => {
  res.send("patch");
});

module.exports = router;
