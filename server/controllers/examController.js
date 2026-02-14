const Exam = require('../models/Exam');
const Question = require('../models/Question');

exports.getExams = async (req, res) => {
  try {
    const { teacherId } = req.user; // From Auth Middleware
    // Students see public exams OR exams from their specific teacher
    const exams = await Exam.find({
      $or: [{ isPublic: true }, { teacherId: teacherId }]
    });
    res.json(exams);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.bulkUploadQuestions = async (req, res) => {
  try {
    if (req.user.role === 'student') return res.status(403).send("Forbidden");
    const questions = await Question.insertMany(req.body.questions.map(q => ({
      ...q, teacherId: req.user.id 
    })));
    res.json({ msg: "Uploaded", count: questions.length });
  } catch (err) {
    res.status(500).send(err.message);
  }
};