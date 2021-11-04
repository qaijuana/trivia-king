const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../models/users_model.js");
const Joi = require("joi");

// USER SIGN-UP PAGE

//JOI validation
const email = Joi.string().email().required().min(8).max(30);
const username = Joi.string().min(5).max(30).required();
const password = Joi.string().alphanum().min(5).max(30).required();

// CREATE NEW USER
router.post("/new", (req, res) => {
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


// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await  User.findOne({ username });
//   if (user === null) {
//     return res.send("no such user")
//   }
//   const result = await bcrypt.compare(password, username.password)
//   if (result) {
//     console.log("session", req.session)
//     //* req.session is an object
//     //* req.session.[key] = [value]
//     req.session.loginUser = user;
//     console.log("new session", req.session)
//     res.send("ok")
//   } else {
//     res.send("no")
//   }
//   // res.send({name, password}); //! ok or not
// })

router.get("/seed", async (req, res) => {
  await User.deleteMany({});
  const herman = new User();
  herman.username = "herman111";
  herman.password =  bcrypt.hashSync("herman111", bcrypt.genSaltSync(10));
  herman.email = "herman@triviaking.com";
  herman.liked_trivia = [];
  herman.timestamp = Date.now;
  await herman.save();

  const qai = new User();
  qai.username = "qai111";
  qai.password =  bcrypt.hashSync("qai111", bcrypt.genSaltSync(10));
  qai.email = "qai@triviaking.com";
  qai.liked_trivia = [];
  qai.timestamp = Date.now;
  await qai.save();

  const tyler = new User();
  tyler.username = "tyler111";
  tyler.password =  bcrypt.hashSync("tyler111", bcrypt.genSaltSync(10));
  tyler.email = "tyler@triviaking.com";
  tyler.liked_trivia = [];
  tyler.timestamp = Date.now;
  await tyler.save();

  res.send(herman, qai, tyler);
});



module.exports = router;
