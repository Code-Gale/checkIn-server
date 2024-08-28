const express = require('express');
const router = express.Router();
const { register, login, checkIn, checkOut} = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

// Check-in route
router.post('/checkin', verifyToken, checkIn);

// Check-out route
router.post('/checkout', verifyToken, checkOut);

module.exports = router;