const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { createBooking, getBookings, updateBooking } = require('../controllers/bookingController');

router.post('/', protect, createBooking); // Resident creates
router.get('/', protect, authorizeRoles('admin'), getBookings); // Admin views all
router.put('/:id', protect, authorizeRoles('admin'), updateBooking); // Admin updates

module.exports = router;
