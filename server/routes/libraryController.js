import {
  insertUser,
  createTable,
  checkRecordExists,
} from "../config/sqlUtils.js";
import { librarySchema } from "../schema/librarySchema.js";
import connectToDatabase from "../config/db.js";

// --- Ensure table exists once when server starts -----------------------------\\
const poolPromise = connectToDatabase().then(async (pool) => {
  await createTable(librarySchema);
  console.log("library table initaited");
  return pool;
});

// ---------------------- CREATE (favorite a plant) --------------------------- \\
export const addFavorite = async (req, res) => {
  const { plant_name, plant_details } = req.body;
  const userId = req.user.id;

  if (!plant_name || !plant_details) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const pool = await poolPromise;
    await pool.query(
      `INSERT INTO user_library (user_id, plant_name, plant_details) VALUES (?, ?, ?)`,
      [userId, plant_name, JSON.stringify(plant_details)]
    );
    res.status(201).json({ message: "Plant added to favorites" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error adding favorite" });
  }
};

// ---------------------- READ (get all favorites) ---------------------- \\
export const getFavorites = async (req, res) => {
  const userId = req.user.id;
  try {
    const pool = await poolPromise;
    const [rows] = await pool.query(
      `SELECT * FROM user_library WHERE user_id = ? ORDER BY created_at DESC`,
      [userId]
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching favorites" });
  }
};

// -------------------------------- DELETE (unfavorite) ----------------------------------------- \\
export const deleteFavorite = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const pool = await poolPromise;
    const [result] = await pool.query(
      `DELETE FROM user_library WHERE id = ? AND user_id = ?`,
      [id, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Favorite not found" });
    }

    res.status(200).json({ message: "Favorite removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error deleting favorite" });
  }
};
