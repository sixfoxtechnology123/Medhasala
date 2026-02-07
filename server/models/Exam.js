const mongoose = require("mongoose");


const schema = new mongoose.Schema({
title: String,
examType: String,
duration: Number,
questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }]
});


module.exports = mongoose.model("Exam", schema);