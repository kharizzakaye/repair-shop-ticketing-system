import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" }); // look at .env.local for the variables

const sql = neon(process.env.DATABASE_URL!);

// logger
// const db = drizzle(sql, {logger: true});

const db = drizzle(sql);

export { db };
