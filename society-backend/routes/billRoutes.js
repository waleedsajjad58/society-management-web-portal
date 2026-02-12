const express = require('express');
const router = express.Router();

// --- IMPORTS ---
const { createBill, getBills, updateBill, deleteBill } = require('../controllers/billController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// --- DEBUG LOGS (Keep these to find the error) ---
console.log("DEBUG: getBills is", typeof getBills);
console.log("DEBUG: authorize is", typeof authorize);
console.log("DEBUG: protect is", typeof protect);

// --- ROUTES ---
// Line 15 (The likely crash point)
router.get('/', protect, authorize('admin', 'member'), getBills);

router.post('/', protect, authorize('admin'), createBill);
router.put('/:id', protect, authorize('admin'), updateBill);
router.delete('/:id', protect, authorize('admin'), deleteBill);

module.exports = router;