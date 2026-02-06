const Complaint = require('../models/Complaint');

// Create complaint
exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      user: req.user._id,
      ...req.body,
    });
    res.status(201).json(complaint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all complaints (admin only)
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate('user', 'name email');
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update complaint status (admin)
exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ message: 'Complaint not found' });

    complaint.status = req.body.status || complaint.status;
    await complaint.save();
    res.json(complaint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
