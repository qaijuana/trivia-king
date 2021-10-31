const express = require("express");
const Trivia = require("../models/trivia_model")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("trivia/index.ejs")
})

router.post("/", (req, res) => {
    console.log(req.body)
    
    let correctAnswer = null
    if (req.body.answer_1 === "on") {
        correctAnswer = req.body.choice_1
    } else if (req.body.answer_2 === "on") {
        correctAnswer = req.body.choice_2
    } else if (req.body.answer_3 === "on") {
        correctAnswer = req.body.choice_3
    } else if (req.body.answer_4 === "on") {
        correctAnswer = req.body.choice_4
    }

    const trivia_questions = [{
        question: req.body.question,
        choices: [req.body.choice_1, req.body.choice_2, req.body.choice_3, req.body.choice_4],
        correctAnswer: correctAnswer
    }]


    console.log(trivia_questions)

    res.redirect("/trivia")
})

router.get("/new", (req, res) => {
    res.render("trivia/new.ejs")
})


module.exports = router