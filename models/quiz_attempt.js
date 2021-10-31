const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attemptSchema = Schema({
    trivia_id: { type: String, required: true },
    users_played: String,
    score: Number,
    rating: Number,
}, { timestamp: true });

const User = mongoose.model("User", userSchema);

module.exports = User;