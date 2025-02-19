const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Sign Up
router.post("/signUp", async (req, res) => {
    try {
        const { fname, lname, email, password, role } = req.body;
        
        // Check if user exists
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Insert new user (password hashing pending)
        const newUser = await pool.query(
            "INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [fname, lname, email, password, role]
        );

        return res.status(200).json({ message: "Sign up success" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error inserting user data" });
    }
});

// Sign In
router.post("/signIn", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const existingUser = await pool.query("SELECT email FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length == 0) {
            return res.status(400).json({ message: "Account doesn't exist" });
        }

        const checkpassword = await pool.query("SELECT password FROM users WHERE email = $1", [email]);
        if (checkpassword.rows[0].password == password) {
            return res.status(200).json({ message: "Login success" });
        } else {
            return res.status(400).json({ message: "Password incorrect" });
        }

    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
