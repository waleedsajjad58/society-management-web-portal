const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Check that these two lines are exactly like this:
router.post('/register', register);
router.post('/login', login);

module.exports = router;