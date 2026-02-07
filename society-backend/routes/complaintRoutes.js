const express = require('express');
const router = express.Router();
// ADD 'updateComplaintStatus' inside these brackets:
const { createComplaint, getComplaints, updateComplaintStatus } = require('../controllers/complaintController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createComplaint)
  .get(protect, getComplaints);

// This is the line that was crashing:
router.route('/:id').put(protect, updateComplaintStatus);

module.exports = router;