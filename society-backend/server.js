const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); // optional but needed for frontend

dotenv.config();
connectDB();

// 1️⃣ Initialize app AFTER imports
const app = express();

// 2️⃣ Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // frontend URL
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});


// 3️⃣ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/complaints', require('./routes/complaintRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/bills', require('./routes/billRoutes'));

// 4️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
