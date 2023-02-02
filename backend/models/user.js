const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");

  if (!validator.isEmail(email)) throw Error("Email is not valid");

  if (!validator.isStrongPassword(password))
    throw Error("Password is not strong enough");

  const emailExists = await this.findOne({ email });
  if (emailExists) throw Error("Email already in use");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");

  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect email");

  const passwordsMatch = await bcrypt.compare(password, user.password);
  if (!passwordsMatch) throw Error("Incorrect password");

  return user;
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
