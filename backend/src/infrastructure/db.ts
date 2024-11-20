import { Pool } from "pg";

let pool: Pool;

export const initializeDB = () => {
  pool = new Pool({
    host: process.env.DATABASE_HOST || "localhost",
    port: Number(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PASSWORD || "postgres",
    database: process.env.DATABASE_NAME || "testdb",
  });

  pool.on("connect", () => {
    console.log("Connected to the database");
  });

  pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });
  // Removed MessageRepository initialization
};

export const getPool = (): Pool => {
  if (!pool) {
    throw new Error("Database not initialized");
  }
  return pool;
};
