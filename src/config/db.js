import {neon} from "@neondatabase/serverless"

import "dotenv/config";

export const sql = neon(process.env.DATABASE_URL);

export async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
        id SERIAL PRIMARY KEy,
        user_id VARCHAR(225) NOT NULL, 
        title VARCHAR(225) NOT NULL, 
        amount DECIMAL (10,2) NOT NULL,
        category VARCHAR(225) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`; 

        console.log("Database initialize Succesfully");
    } catch (error) {
        console.log("Error initializing Database", error);
        process.exit(1);
    }
}