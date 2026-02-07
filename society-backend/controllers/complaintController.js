const Complaint = require('../models/Complaint');

// @desc    Create new complaint
// @route   POST /api/complaints
exports.createComplaint = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    
    // req.user comes from your auth middleware
    const complaint = await Complaint.create({
      user: req.user._id,
      title,
      description,
      category
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.updateComplaintStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ message: 'Complaint not found' });

    complaint.status = req.body.status || complaint.status;
    const updatedComplaint = await complaint.save();
    res.json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all complaints
// @route   GET /api/complaints
exports.getComplaints = async (req, res) => {
  try {
    let complaints;
    
    // Check if the user is an admin
    if (req.user && req.user.role === 'admin') {
      console.log("Admin detected, fetching all complaints...");
      complaints = await Complaint.find()
        .populate('user', 'name email') // Get the user's name and email
        .sort({ createdAt: -1 });
    } else {
      console.log(`Member detected (${req.user._id}), fetching personal complaints...`);
      complaints = await Complaint.find({ user: req.user._id })
        .sort({ createdAt: -1 });
    }

    res.json(complaints);
  } catch (error) {
    console.error("Backend Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};