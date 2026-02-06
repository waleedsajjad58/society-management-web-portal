const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  month: { type: String, required: true }, // e.g., "February 2026"
  status: { type: String, enum: ['unpaid', 'paid'], default: 'unpaid' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', billSchema);
