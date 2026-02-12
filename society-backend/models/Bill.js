const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  amount: { type: Number, required: true },
  month: { type: String, required: true },
  status: { type: String, default: 'unpaid', enum: ['unpaid', 'paid'] }
}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);