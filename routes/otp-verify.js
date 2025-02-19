const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const otpStore = new Map();

// Email Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Send OTP
router.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Email Verification Code",
            html: `
                <div style="text-align: center; font-family: Arial;">
                    <h2>Your Verification Code</h2>
                    <h1 style="color: #4CAF50;">${otp}</h1>
                    <p>This code expires in 5 minutes</p>
                </div>
            `,
        });

        otpStore.set(email, { code: otp, timestamp: Date.now() });

        res.json({ success: true, message: otp });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
});


// Verify OTP
router.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    const storedData = otpStore.get(email);

    if (!storedData) {
        return res.status(400).json({ success: false, message: "No OTP found for this email" });
    }

    if (Date.now() - storedData.timestamp > 5 * 60 * 1000) {
        otpStore.delete(email);
        return res.status(400).json({ success: false, message: "OTP has expired" });
    }

    if (storedData.code === otp) {
        otpStore.delete(email);
        return res.json({ success: true, message: "Email verified successfully" });
    }

    res.status(400).json({ success: false, message: "Invalid OTP" });
});

module.exports = router;
