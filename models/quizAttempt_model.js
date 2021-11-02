const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizAttemptSchema = Schema({
  trivia_id: {
    type: String,
    trim: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
}, {timestamp: true});

const QuizAttempt = mongoose.model("QuizAttempt", quizAttemptSchema);

module.exports = QuizAttempt;
