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
    required: false,
    default: "https://as1.ftcdn.net/v2/jpg/03/35/13/14/1000_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg",
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
