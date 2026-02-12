const Bill = require('../models/Bill');

// 1. GET ALL BILLS
exports.getBills = async (req, res) => {
  try {
    let query = {};
    if (req.user.role === 'member') {
      query = { user: req.user._id };
    }
    const bills = await Bill.find(query).populate('user', 'name email');
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. CREATE NEW BILL
exports.createBill = async (req, res) => {
  try {
    const { user, amount, month } = req.body; 
    const newBill = new Bill({ user, amount, month });
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (error) {
    console.log("Backend Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// 3. UPDATE BILL STATUS (This was likely the missing piece!)
exports.updateBill = async (req, res) => {
  try {
    const updatedBill = await Bill.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedBill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.status(200).json(updatedBill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. DELETE BILL
exports.deleteBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    await bill.deleteOne();
    res.status(200).json({ message: "Bill removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};