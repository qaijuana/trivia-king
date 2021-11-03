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
      validate: {
        validator: (username) => User.doesNotExist({ username }),
        message: "Username already exists",
      },
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
      validate: {
        validator: (email) => User.doesNotExist({ email }),
        message: "Email already exists",
      },
    },
    liked_trivia: [],
  },
  { timestamp: true }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
