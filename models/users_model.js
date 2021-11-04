const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcryptjs = require("bcryptjs") 
const bcrypt = require("bcrypt")

const userSchema = Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minLength: 5,
      // validate: {
      //   validator: (username) => User.doesNotExist({ username }),
      //   message: "Username already exists",
      // },
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
      // validate: {
      //   validator: (email) => User.doesNotExist({ email }),
      //   message: "Email already exists",
      // },
    },
    liked_trivia: [],
  },
  { timestamp: true }
);

// THIS RUNS BEFORE USER IS CREATED
// checks if user password is provided, 
// new user does not already exist
// compares password to hashed
// userSchema.pre("save", function () {
//   if (this.isModified("password")) {
//     this.password = bcrypt.hashSync(this.password, 10);
//   }
// });
// userSchema.statics.doesNotExist = async function (field) {
//   return (await this.where(field).countDocuments()) === 0;
// };
// userSchema.methods.comparePasswords = function (password) {
//   return compareSync(password, this.password);
// };


const User = mongoose.model("User", userSchema);

module.exports = User;
