// Config file to set up .env variables
import "./config.js";

// Packages
import express from "express";
import argon2 from 'argon2';

// Custom functions 
import { geminiService } from "./gemini.js";
import { authService } from "./authService.js";
import pool from "./db.js";


const app = express();

// Middleware: software that processes HTTP requests before they reach
// the final route handler or before the response is sent back
// Middleware to parse JSON
app.use(express.json());

let testing = "Testing string works. App.get works";

// GET - Retrieve test string
app.get ('/', (req, res) => {
    res.send('backend works');
});

app.get ('/api/test',  (req, res) => {
    try {
        // Supposed to get user object back 
        const user = authService.loginUser('apple', 'apple123');

        if (!user)
        console.log(user);
        res.json(user);
        res.end()
        
    } catch (err) {

        console.error("Error fetching user", err);
    }
});

// Listen on port 3000
app.listen(3000, () => {
    console.log(
        "Server is running on http://localhost:3000"
    );
})