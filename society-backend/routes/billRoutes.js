const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { createBill, getBills, updateBill } = require('../controllers/billController');

router.post('/', protect, authorizeRoles('admin'), createBill); // Admin creates
router.get('/', protect, getBills); // Everyone can see bills (filter later if needed)
router.put('/:id', protect, authorizeRoles('admin'), updateBill); // Admin updates

module.exports = router;
