// Config file to set up .env variables
import "./config.js";

// Packages
import express from "express";
import argon2 from 'argon2';

// Custom functions 
import { geminiService } from "./gemini.js";
import pool from "./db.js";


const app = express();

// Middleware: software that processes HTTP requests before they reach
// the final route handler or before the response is sent back
// Middleware to parse JSON
app.use(express.json());

let testing = "Testing string works. App.get works";
const response = await pool.query("SELECT * FROM users");

// GET - Retrieve test string
app.get ('/api/test', (req, res) => {
    res.json(response);
});

// Listen on port 3000
app.listen(3000, () => {
    console.log(
        "Server is running on http://localhost:3000"
    );
})