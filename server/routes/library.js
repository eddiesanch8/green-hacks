import express from "express";
import authenticateToken from "./authToken.js";
import {
  addFavorite,
  getFavorites,
  deleteFavorite,
} from "./libraryController.js";

const router = express.Router();

// Protect all routes with JWT middleware
router.use(authenticateToken);

// POST → Add a plant to favorites
router.post("/", addFavorite);

// GET → Get all favorited plants for logged-in user
router.get("/", getFavorites);

// DELETE → Remove a specific favorite by ID
router.delete("/:id", deleteFavorite);

export default router;
