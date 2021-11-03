const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs")
const express = require("express");
const router = express.Router();
const User = require("../models/users_model.js");
const Joi = require('joi');

// USER SIGN-UP PAGE


//JOI validation
const email = Joi.string().email().required().min(8).max(30)
const username = Joi.string().min(5).max(30).required();
const password = Joi.string().alphanum().min(5).max(30).required();




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
// const userRouter = express.Router();
// userRouter.post("", async (req, res) => {
//   try {
//     const { username, email, password } = req.body
//     await Joi.validate({ username, email, password }, signUp);
//     const newUser = new User({ username, email, password });
//     await newUser.save();
//     res.send({ userId: newUser.id, username });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await  User.findOne({ username });
  if (user === null) {
    return res.send("no such user")
  }
  const result = await bcrypt.compare(password, username.password)
  if (result) {
    console.log("session", req.session)
    //* req.session is an object
    //* req.session.[key] = [value] 
    req.session.loginUser = user;
    console.log("new session", req.session)
    res.send("ok")
  } else {
    res.send("no")
  }
  // res.send({name, password}); //! ok or not
})


router.get("/seed", async (req, res) => {
  await User.deleteMany({});
  const herman = new User();
  herman.username = "herman111";
  herman.password = bcrypt.hashSync("herman111", bcrypt.genSaltSync(10));
  herman.email = "herman@triviaking.com";
  herman.liked_trivia = [];
  herman.timestamp = Date.now;
  await herman.save();

  const qai = new User();
  qai.username = "qai111";
  qai.password = bcrypt.hashSync("qai111", bcrypt.genSaltSync(10));
  qai.email = "qai@triviaking.com";
  qai.liked_trivia = [];
  qai.timestamp = Date.now;
  await qai.save();

  const tyler = new User();
  tyler.username = "tyler111";
  tyler.password = bcrypt.hashSync("tyler111", bcrypt.genSaltSync(10));
  tyler.email = "tyler@triviaking.com";
  tyler.liked_trivia = [];
  tyler.timestamp = Date.now;
  await tyler.save();

  res.send(herman, qai, tyler);
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  const { username, password } = req.body
  console.log("back end login: Req Body", req.body)
  // basic validation
  if (!username || !password) { return res.status(400).json({ msg: "please enter all fields" }) }
  // check if registered
  const user = await User.findOne({ username })

  console.log("user", user)

  if (!user) { return res.status(400).json({ msg: "user does not exist" }) }
  //validate password
  console.log("user", username, "and password", password)
  console.log("bcrypt", bcrypt.compareSync(password, user.password))

  if (bcrypt.compareSync(password, user.password)) {
    req.session.loginUser = user;
    console.log("Success!")
    res.send("Success!")
  } else {
    console.log("password mismatched")
    res.send("password mismatched")
  }


  // User.findOne({ username }, (err, foundUser) => {
  //   // Database error
  //   if (err) {
  //     console.log(err);
  //     res.send("oops the db had a problem");
  //   } else if (!foundUser) {
  //     // if found user is undefined/null not found etc
  //     res.send('<a  href="/">Sorry, no user found </a>');
  //   } else {
  //     // user is found yay!
  //     // now let's check if passwords match
  //     if (bcrypt.compareSync(password, foundUser.password)) {
  //       // add the user to our session
  //       req.session.currentUser = foundUser;
  //       // redirect back to our home page
  //       res.redirect("/");
  //     } else {
  //       // passwords do not match
  //       res.send('<a href="/"> password does not match </a>');
  //     }
  //   }})
})


module.exports = router;
