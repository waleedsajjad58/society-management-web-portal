const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { createComplaint, getComplaints, updateComplaint } = require('../controllers/complaintController');

router.post('/', protect, createComplaint); // Resident creates complaint
router.get('/', protect, authorizeRoles('admin'), getComplaints); // Admin views all
router.put('/:id', protect, authorizeRoles('admin'), updateComplaint); // Admin updates

module.exports = router;
