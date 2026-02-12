const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  facility: { type: String, required: true },
  date: { type: Date, required: true },
  // Changed these to match your Frontend dropdown values
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected', 'pending', 'approved', 'rejected'], 
    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);