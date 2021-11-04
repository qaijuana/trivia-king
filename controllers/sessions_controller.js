const bcrypt = require("bcrypt");
const express = require("express");
const sessions = express.Router();
const User = require("../models/users_model.js");

sessions.get("/new", (req, res) => {
  res.render("sessions/new.ejs", { currentUser: req.session.currentUser });
});

sessions.post("/", async (req, res) => {
  // Step 1 Look for the username
  console.log(req.body);
  await User.findOne({ username: req.body.username }, (err, foundUser) => {
    // Database error
    console.log("founduser", foundUser);
    console.log("password", req.body.password, "found pw", foundUser.password);
    if (err) {
      console.log("error", err);
      res.send("oops the db had a problem");
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/">Sorry, no user found </a>');
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session

        req.session.currentUser = foundUser;
        res.send(foundUser);
        console.log("founduser", foundUser);
        console.log("session", req.session);
        console.log("session user", req.session.currentUser);
        // redirect back to our home page
        // res.redirect("/");
      } else {
        // passwords do not match
        res.send('<a href="/"> password does not match </a>');
      }
    }
  })
    .clone()
    .catch(function (err) {
      console.log(err);
    });
});

sessions.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

sessions.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

module.exports = sessions;
