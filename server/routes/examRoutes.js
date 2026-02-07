const router = require("express").Router();
const { createExam, getExams } = require("../controllers/examController");


router.post("/", createExam);
router.get("/", getExams);


module.exports = router;