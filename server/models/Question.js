const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Null if Public
  subject: { type: String, required: true },
  topic: { type: String },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },
  // Multi-language storage
  content: {
    en: { text: String, options: { A: String, B: String, C: String, D: String } },
    hi: { text: String, options: Object }, // Hindi
    bn: { text: String, options: Object }  // Bengali, etc.
  },
  correctAnswer: { type: String, required: true }, // 'A', 'B', 'C', or 'D'
  explanation: String
});

module.exports = mongoose.model('Question', QuestionSchema);