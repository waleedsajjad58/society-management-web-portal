const express = require('express');
const router = express.Router();
const { 
    createBooking, 
    getBookings, 
    updateBookingStatus 
} = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

// /api/bookings
router.route('/')
    .post(protect, createBooking)
    .get(protect, getBookings);

// /api/bookings/:id
router.route('/:id')
    .put(protect, updateBookingStatus);

module.exports = router;