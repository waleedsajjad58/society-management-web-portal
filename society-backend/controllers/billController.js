const Bill = require('../models/Bill');

// Create bill (admin)
exports.createBill = async (req, res) => {
  try {
    const bill = await Bill.create({
      user: req.body.user,
      amount: req.body.amount,
      month: req.body.month,
      status: req.body.status || 'unpaid',
    });
    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all bills
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate('user', 'name email');
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update bill status
exports.updateBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: 'Bill not found' });

    bill.status = req.body.status || bill.status;
    await bill.save();
    res.json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
