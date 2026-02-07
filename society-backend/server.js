const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import Route Files
const authRoutes = require('./routes/authRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const billRoutes = require('./routes/billRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// --- MIDDLEWARE ---
app.use(cors()); // Allows your frontend to communicate with this server
app.use(express.json()); // Essential for reading JSON data from req.body
app.use(express.urlencoded({ extended: true })); // Essential for form-data

// --- ROUTES ---

// Auth Routes (Login, Signup)
app.use('/api/auth', authRoutes);

// Complaint Routes (Create, View, Update Status)
app.use('/api/complaints', complaintRoutes);

// Billing/Challan Routes
app.use('/api/bills', billRoutes);

// Root Route for Testing
app.get('/', (req, res) => {
  res.send('Society Management API is running...');
});

// --- SERVER INITIALIZATION ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 MongoDB Connection attempted...`);
});