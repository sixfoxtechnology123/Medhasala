const Exam = require("../models/Exam");


exports.createExam = async (req, res) => {
const exam = await Exam.create(req.body);
res.json(exam);
};


exports.getExams = async (req, res) => {
const exams = await Exam.find().populate("questions");
res.json(exams);
};