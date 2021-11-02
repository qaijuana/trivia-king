const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minLength: 5,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minLength: 8,
    },
    liked_trivia: [],
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
