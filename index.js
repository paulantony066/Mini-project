const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/authentication");
const otpRoutes = require("./routes/otp-verify");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/otp", otpRoutes);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
    
});

