//* Dependencies
const dotenv = require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
//? Controllers
const testController = require("./controllers/testController");
const userController = require("./controllers/users_controller.js");
const session = require("express-session");
const sessionsController = require("./controllers/sessions_controller.js");
const triviaController = require("./controllers/trivia_controller");
//
//
///////////////////////////////////////////////
// CONNECT TO MONGO ATLAS
///////////////////////////////////////////////
mongoose.Promise = global.Promise;
const cloud = process.env.ATLAS;
const db = mongoose.connection;
mongoose.connect(
  cloud,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongo cloud connection established");
  }
);
// ERROR / SUCCESS
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));
///////////////////////////////////////////////
// END of CONNECT TO MONGO ATLAS
///////////////////////////////////////////////

//* Config
// const PASSWORD = anFbOQsQYv1M45Uw;
const app = express();
const port = process.env.PORT ?? 3001;
///////////////////////////////////////////////
// commenting out Qai's local database to connect Atlas
///////////////////////////////////////////////
// const MONGODB_URI =
//   process.env.MONGODB_URI ?? `mongodb://localhost:27017/trivia`;
// //! change database host to atlas mongodb database @Qai
// mongoose.connect(MONGODB_URI);
// mongoose.connection.once("open", () => {
//   console.log("connected to mongoose..." + MONGODB_URI);
// });
///////////////////////////////////////////////
// END OF commenting out local database to connect Atlas
///////////////////////////////////////////////

//* Middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
//? Middleware for controllers
app.use("/api/test", testController);
app.use("/api/users", userController);
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false, // default  more info: https://www.npmjs.com/package/express-session#resave
  })
);
app.use("/api/sessions", sessionsController);
app.use("/api/trivia", triviaController);
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
