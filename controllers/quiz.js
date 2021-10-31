const express = require("express");
const Quiz = require("../models/quiz")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("quiz/index.ejs")
})

router.post("/", (req, res) => {
    console.log(req.body)
    
    res.redirect("/quiz")
})

router.get("/new", (req, res) => {
    res.render("quiz/new.ejs")
})


module.exports = router