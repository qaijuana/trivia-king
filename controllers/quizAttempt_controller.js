const express = require("express");
const QuizAttempt = require("../models/quizAttempt_model")
const router = express.Router();

// User authentication 
const isAuthenticated = (req, res, next) => {
  if (req.session.loginUser) {
    return next();
  } else {
    res.redirect("/");
  }
};

// posting to Route path specified in client/src/App.js
// upon quiz completion, and at results page
//// CREATE ROUTE 
router.post("/api/trivia/:triviaId/results", isAuthenticated, (req,res) => {
    const { triviaId } = req.params
    
})


module.exports = router