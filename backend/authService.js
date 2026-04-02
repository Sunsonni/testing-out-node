import argon2, { hash } from "argon2";
import pool from './db.js';
import { Client } from "pg";


// TODO: finish hashPassword Function and have saveUser;
async function hashPassword(password) {
    try {
        const hash = await argon2.hash(password);
        return hash;
        
    } catch (err) {
        console.error(`Error hashing password.`)
    }
}

// TODO: Finish loginUser function
async function loginUser(validator, password) {
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM users WHERE email = $1 OR username = $1`;
        const values = [validator];
        const result = await client.query(query, values);
        const user = result.rows[0];
        if (!user) {
            return null;
        }

        // TODO: verify hash with password given if wrong then return failure message, 
        const verified = await argon2.verify(result.rows[0].password_hash, password);
        // TODO: make into jwt token
        return result.rows;
        
    } catch (err) {
        console.error("Error fetching user", err);
    } finally {
        client.release();
    }
}

export const authService = {
    hashPassword,
    loginUser
};