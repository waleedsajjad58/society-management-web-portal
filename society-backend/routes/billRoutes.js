const express = require('express');
const router = express.Router();
const { createBill, getBills, updateBill } = require('../controllers/billController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// Admin can see all bills and create new ones
router.get('/', protect, authorize('admin'), getBills);
router.post('/', protect, authorize('admin'), createBill);

// Admin can update a bill (e.g., mark as paid)
router.put('/:id', protect, authorize('admin'), updateBill);

module.exports = router;