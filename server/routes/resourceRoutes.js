const express = require('express');
const router = express.Router();
const { addResource, getResources } = require('../controllers/resourceController');
const auth = require('../middleware/auth');

router.get('/', getResources); // Public access
router.post('/add', auth, addResource); // Admin only

module.exports = router;