const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function createToken(_id) {
  return jwt.sign({ _id }, JWT_SECRET, { expiresIn: "3d" });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error.message);
  }
}

async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  loginUser,
  signupUser,
};
