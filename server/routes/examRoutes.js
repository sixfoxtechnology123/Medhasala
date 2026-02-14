const express = require('express');
const router = express.Router();
const { getExams, bulkUploadQuestions } = require('../controllers/examController');
const auth = require('../middleware/auth'); // You need to create this middleware

router.get('/', auth, getExams);
router.post('/bulk-upload', auth, bulkUploadQuestions);

module.exports = router;