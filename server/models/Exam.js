const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['Government', 'Medical', 'Olympiad'] },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  isPublic: { type: Boolean, default: true },
  duration: { type: Number, required: true }, // in minutes
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  startTime: Date,
  bannerImage: String
});

module.exports = mongoose.model('Exam', ExamSchema);