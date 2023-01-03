const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.get("/", (req, res) => {
  res.send("get all");
});
router.get("/:id", (req, res) => {
  res.send("get one");
});
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.send("post");
});
router.delete("/:id", (req, res) => {
  res.send("del");
});
router.patch("/:id", (req, res) => {
  res.send("patch");
});

module.exports = router;
