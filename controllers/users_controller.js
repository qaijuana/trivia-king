const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/users_model.js");
const Joi = require('joi'); 

// USER SIGN-UP PAGE
router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

// THIS RUNS BEFORE USER IS CREATED
// checks if user password is provided, 
// new user does not already exist
// compares password to hashed
User.schema.pre("save", function () {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
});
User.schema.statics.doesNotExist = async function (field) {
  return (await this.where(field).countDocuments()) === 0;
};
User.schema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};


// CREATE NEW USER
router.post("/", (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    console.log("user is created", createdUser);
    res.redirect("/");
  });
});

router.get("/seed", async (req, res) => {
  await User.deleteMany({});
  const herman = new User();
  herman.username = "herman111";
  herman.password = await bcrypt.hash("herman111", 10);
  herman.email = "herman@triviaking.com";
  herman.liked_trivia = [];
  herman.timestamp = Date.now;
  await herman.save();

  const qai = new User();
  qai.username = "qai111";
  qai.password = await bcrypt.hash("qai111", 10);
  qai.email = "qai@triviaking.com";
  qai.liked_trivia = [];
  qai.timestamp = Date.now;
  await qai.save();

  const tyler = new User();
  tyler.username = "tyler111";
  tyler.password = await bcrypt.hash("tyler111", 10);
  tyler.email = "tyler@triviaking.com";
  tyler.liked_trivia = [];
  tyler.timestamp = Date.now;
  await tyler.save();

  res.send(herman, qai, tyler);
});

// LOGIN ROUTE
router.post("/login", async (req,res) => {
  const {username, password} = req.body
  // basic validation
  if(!username || !password) { return res.status(400).json({msg:"please enter all fields"})}
  // check if registered
  const user = await User.findOne({username})
  if (!user) {return res.status(400).json({msg: "user does not exist"})}
  //validate password
  const result = await bcrypt.compare(password, user.password)
  if (result) {req.session.loginUser = user}
})


module.exports = router;
