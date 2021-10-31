//* Dependencies
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override")
//? Controllers
const testController = require("./controllers/testController");
const quizController = require("./controllers/quiz")
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
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
//? Middleware for controllers
app.use("/api/test", testController);
app.use("/quiz", quizController)
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
