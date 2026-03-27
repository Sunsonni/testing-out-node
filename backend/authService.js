import argon2, { hash } from "argon2";
import pool from './db.js';
import { Client } from "pg";


async function hashPassword(password) {
    try {
        const hash = await argon2.hash(password);
    } catch (err) {
        console.error(`Error hashing password.`)
    }
}

// TODO: Finish loginUser function
async function loginUser(validator, password) {
    try {
        const client = new Client();
        const query = `SELECT * FROM users WHERE email = $1 OR username = $1`;
        const values = ['validator'];
        const result = await client.query(query, values);
        console.log(result);
        // if (await argon2.verify(hashPassword)) {
        //     return 
        // }

    } catch (err) {
        console.error("Error fetching user", err);
    }
}

export const authService = {
    hashPassword,
    loginUser

};