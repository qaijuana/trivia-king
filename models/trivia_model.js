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
  tags: [
    {
      type: String,
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
          type: String,
          required: true,
          trim: true,
        },
      ],
      correctAnswer: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const Trivia = mongoose.model("Trivia", triviaSchema);
module.exports = Trivia;
