const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = Schema({
    title: { type: String, required: true },
    description: String,
    category: { type: String, required: true },
    tags: [String],
    trivia_questions: [{
        question: String,
        choices: [String],
        answer: String,
    }],
    author: String
}, { timestamp: true });

const Quiz = mongoose.model("User", quizSchema);

module.exports = Quiz;