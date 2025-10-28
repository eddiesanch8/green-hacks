import mysql from "mysql2/promise";
import dbConfig from "./config.js";

const connectToDatabase = async () => {
  try {
    const pool = await mysql.createPool(dbConfig);
    console.log("Connected to MySQL database successfully");
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
};

export default connectToDatabase;
