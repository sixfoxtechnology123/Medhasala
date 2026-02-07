const mongoose = require("mongoose");


const schema = new mongoose.Schema({
question: String,
options: [String],
correctAnswer: String,
subject: String
});


module.exports = mongoose.model("Question", schema);