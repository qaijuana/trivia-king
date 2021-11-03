const express = require("express");
const Trivia = require("../models/trivia_model");
const router = express.Router();
const User = require("../models/users_model");

router.get("/", async (req, res) => {
  const trivia = await Trivia.find({});
  res.json(trivia);
});

router.get("/seed", async (req, res) => {

  const trivia = await Trivia.create({
    title: "Colors",
    description: "Colors of the world",
    category: "General Knowledge",
      images: "https://www.readersdigest.ca/wp-content/uploads/2020/03/color-quiz.jpg",
    tags: ["colors", "general knowledge", "rainbow"],
    trivia_questions: [
      {
        question: "What colors is the green grass?",
        choices: ["red", "blue", "green", "yellow"],
        correctAnswer: 2,
      },
      {
        question: "what color is the yellow ball?",
        choices: ["blue", "yellow", "red", "green"],
        correctAnswer: 1,
      },
      {
        question: "What color is the blue sky?",
        choices: ["yellow", "green", "red", "blue"],
        correctAnswer: 3,
      },
    ],
  });
  res.redirect("/api/trivia");
});

router.post("/", async (req, res) => {
  console.log("backend reqbody POST:", req.body);
  const trivia = await Trivia.create(req.body);
  res.json(trivia);
});

router.get("/new", (req, res) => {
  res.render("trivia/new.ejs");
});

router.get("/:id/like", async (req, res) => {
      await User.findByIdAndUpdate("617f8755039827ace01e9b4e", {
        $push: { liked_trivia: req.params },
      });
      await Trivia.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}})
    //   await Trivia.findByIdAndUpdate(req.params.id, {likes: 1})
      res.send("like")
    });
    
    router.get("/:id/unlike", async (req, res) => {
        await User.findByIdAndUpdate("617f8755039827ace01e9b4e", {
          $pull: { liked_trivia: req.params },
        });
        await Trivia.findByIdAndUpdate(req.params.id, {$inc: {likes: -1}})
      //   await Trivia.findByIdAndUpdate(req.params.id, {likes: 1})
        res.send("unlike")
      });


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const trivia = await Trivia.findById(id);
  res.json(trivia);
});

router.put("/:id", async (req, res) => {

  console.log("reqbody PUT:", req.body)
  const { id } = req.params;
  const trivia = await Trivia.findByIdAndUpdate(id, req.body);
  console.log("back end PUT trivia:", trivia)
  res.json(trivia);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Trivia.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
});



module.exports = router;
