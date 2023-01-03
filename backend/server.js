const express = require("express");
const workoutRoutes = require("./routes/workout");
require("dotenv").config();

const PORT = process.env.port || 4000;

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});
app.use("/api/workouts", workoutRoutes);

// listen
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
