const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");
require("dotenv").config();

const PORT = process.env.port || 4000;

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    // origin: ["http://localhost:5173"],
    origin: "*",
  })
);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    // listen
    app.listen(PORT, () => {
      console.log(`connected to db and listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
