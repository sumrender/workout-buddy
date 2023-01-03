const express = require("express");
const router = express.Router();
const {createWorkout} = require("../controllers/workout");
router.get("/", (req, res) => {
  res.send("get all");
});
router.get("/:id", (req, res) => {
  res.send("get one");
});
router.post("/", createWorkout);
router.delete("/:id", (req, res) => {
  res.send("del");
});
router.patch("/:id", (req, res) => {
  res.send("patch");
});

module.exports = router;
