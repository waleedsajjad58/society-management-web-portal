const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// Get all members (Admin only)
router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        // We only want 'members', and we don't want to send their passwords
        const users = await User.find({ role: 'member' }).select('name email');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;