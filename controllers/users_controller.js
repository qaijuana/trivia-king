const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/users_model.js");

// USER SIGN-UP PAGE
router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

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
  User.deleteMany({});
  const herman = new User();
  herman.username = "herman111"
  herman.password = await bcrypt.hash("herman111", 10);
  herman.email = "herman@triviaking.com"
  herman.liked_trivia = []
  await herman.save();

  const qai = new User();
  qai.username = "qai111"
  qai.password = await bcrypt.hash("qai111", 10);
  qai.email = "qai@triviaking.com"
  qai.liked_trivia = []
  await qai.save();

  const tyler = new User();
  tyler.username = "tyler111"
  tyler.password = await bcrypt.hash("tyler111", 10);
  tyler.email = "tyler@triviaking.com"
  tyler.liked_trivia = []
  await tyler.save();

  res.send(herman, qai, tyler)
});


module.exports = router;