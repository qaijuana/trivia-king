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
    tags: ["colors", "general knowledge", "rainbow"],
    trivia_questions: [
      {
        question: "What colors is the green grass?",
        choices: ["red", "blue", "green", "yellow"],
        correctAnswer: "green",
      },
      {
        question: "what color is the yellow ball?",
        choices: ["blue", "yellow", "red", "green"],
        correctAnswer: "yellow",
      },
      {
        question: "What color is the blue sky?",
        choices: ["yellow", "green", "red", "blue"],
        correctAnswer: "blue",
      },
    ],
  });
  res.redirect("/api/trivia");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  let correctAnswer = null;
  if (req.body.answer_1 === "on") {
    correctAnswer = req.body.choice_1;
  } else if (req.body.answer_2 === "on") {
    correctAnswer = req.body.choice_2;
  } else if (req.body.answer_3 === "on") {
    correctAnswer = req.body.choice_3;
  } else if (req.body.answer_4 === "on") {
    correctAnswer = req.body.choice_4;
  }
  const trivia_questions = [
    {
      question: req.body.question,
      choices: [
        req.body.choice_1,
        req.body.choice_2,
        req.body.choice_3,
        req.body.choice_4,
      ],
      correctAnswer: correctAnswer,
    },
  ];

  const context = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    tags: [req.body.tags],
    trivia_questions: trivia_questions,
  };

  const trivia = await Trivia.create(context);
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
    


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const trivia = await Trivia.findById(id);
  res.json(trivia);
});

router.put("/:id", async (req, res) => {
  let correctAnswer = null;
  if (req.body.answer_1 === "on") {
    x;
    correctAnswer = req.body.choice_1;
  } else if (req.body.answer_2 === "on") {
    correctAnswer = req.body.choice_2;
  } else if (req.body.answer_3 === "on") {
    correctAnswer = req.body.choice_3;
  } else if (req.body.answer_4 === "on") {
    correctAnswer = req.body.choice_4;
  }
  const { id } = req.params;
  const trivia = await Trivia.findByIdAndUpdate(id, req.body);
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
