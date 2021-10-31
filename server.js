//* Dependencies
const dotenv = require('dotenv').config()
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
//? Controllers
const testController = require("./controllers/testController");
const userController = require("./controllers/users_controller.js");
const session = require("express-session")
const sessionsController = require("./controllers/sessions_controller.js");
//
//

//* Config
// const PASSWORD = anFbOQsQYv1M45Uw;
const app = express();
const port = process.env.PORT ?? 3001;
const MONGODB_URI =
  process.env.MONGODB_URI ?? `mongodb://localhost:27017/trivia`;
//! change database host to atlas mongodb database @Qai
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose..." + MONGODB_URI);
});

//* Middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
//? Middleware for controllers
app.use("/api/test", testController);
app.use("/users", userController);
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false, // default  more info: https://www.npmjs.com/package/express-session#resave
  })
);
app.use("/sessions", sessionsController);
//
//

//* Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//* Start Server to listen
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
