const mongoose = require("mongoose");

const triviaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  images: {
    type: String,
    default: "https://e7.pngegg.com/pngimages/577/649/png-clipart-question-mark-question-mark.png",
    trim: true,
  },
  tags: [
    {
      type: [String],
      required: true,
      trim: true,
    },
  ],
  trivia_questions: [
    {
      question: {
        type: String,
        required: true,
        trim: true,
      },
      choices: [
        {
          type: [String],
          required: true,
          trim: true,
        },
      ],
      correctAnswer: {
        type: Number,
        required: true,
        trim: true,
      },
    },
  ], 
  likes: {type: Number, min:0},
  author: {type: String, required: false},
}, {timestamp: true});

const Trivia = mongoose.model("Trivia", triviaSchema);
module.exports = Trivia;
