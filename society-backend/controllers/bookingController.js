const Booking = require('../models/Booking');

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user._id,
      ...req.body,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all bookings (admin)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Change 'updateBooking' to 'updateBookingStatus'
exports.updateBookingStatus = async (req, res) => { 
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.status = req.body.status || booking.status;
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
